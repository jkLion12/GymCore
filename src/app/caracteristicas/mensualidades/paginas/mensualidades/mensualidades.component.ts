import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TablaDatosComponent } from '../../../../compartido/componentes/tabla-datos/tabla-datos.component';
import { GimnasioServicio } from '../../../../core/servicios/gimnasio.servicio';

@Component({
  selector: 'app-mensualidades',
  imports: [CommonModule, CurrencyPipe, TablaDatosComponent],
  templateUrl: './mensualidades.component.html',
  styleUrl: './mensualidades.component.css',
})
export class MensualidadesComponent {
  private readonly gimnasioServicio = inject(GimnasioServicio);

  readonly planes = this.gimnasioServicio.planes;
  readonly renovaciones = this.gimnasioServicio.obtenerClientesPorVencer().map((cliente) => ({
    cliente: cliente.nombre,
    plan: cliente.plan,
    estado: cliente.estado,
    vencimiento: cliente.vencimiento,
    deuda: `S/ ${cliente.deuda}`,
  }));
}
