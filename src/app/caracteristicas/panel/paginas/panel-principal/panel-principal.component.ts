import { Component, inject } from '@angular/core';
import { BloqueEstadoComponent } from '../../../../compartido/componentes/bloque-estado/bloque-estado.component';
import { TablaDatosComponent } from '../../../../compartido/componentes/tabla-datos/tabla-datos.component';
import { TarjetaMetricaComponent } from '../../../../compartido/componentes/tarjeta-metrica/tarjeta-metrica.component';
import { GimnasioServicio } from '../../../../core/servicios/gimnasio.servicio';

@Component({
  selector: 'app-panel-principal',
  imports: [TarjetaMetricaComponent, TablaDatosComponent, BloqueEstadoComponent],
  templateUrl: './panel-principal.component.html',
  styleUrl: './panel-principal.component.css',
})
export class PanelPrincipalComponent {
  private readonly gimnasioServicio = inject(GimnasioServicio);

  readonly indicadores = this.gimnasioServicio.obtenerIndicadoresPrincipales();
  readonly tendencia = this.gimnasioServicio.asistenciaSemanal;
  readonly clientesPorVencer = this.gimnasioServicio.obtenerClientesPorVencer().map((cliente) => ({
    nombre: cliente.nombre,
    plan: cliente.plan,
    estado: cliente.estado,
    vencimiento: cliente.vencimiento,
    deuda: `S/ ${cliente.deuda}`,
  }));
  readonly ingresos = this.gimnasioServicio.ingresosMensuales;
}
