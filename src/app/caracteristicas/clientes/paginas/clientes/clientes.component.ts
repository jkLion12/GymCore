import { Component, inject } from '@angular/core';
import { TablaDatosComponent } from '../../../../compartido/componentes/tabla-datos/tabla-datos.component';
import { TarjetaMetricaComponent } from '../../../../compartido/componentes/tarjeta-metrica/tarjeta-metrica.component';
import { GimnasioServicio } from '../../../../core/servicios/gimnasio.servicio';

@Component({
  selector: 'app-clientes',
  imports: [TablaDatosComponent, TarjetaMetricaComponent],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css',
})
export class ClientesComponent {
  private readonly gimnasioServicio = inject(GimnasioServicio);

  readonly clientes = this.gimnasioServicio.clientes.map((cliente) => ({
    nombre: cliente.nombre,
    plan: cliente.plan,
    estado: cliente.estado,
    ultimoPago: cliente.ultimoPago,
    vencimiento: cliente.vencimiento,
    asistenciaMes: cliente.asistenciaMes,
  }));

  readonly indicadores = [
    {
      titulo: 'Total de clientes',
      valor: `${this.gimnasioServicio.clientes.length}`,
      descripcion: 'Base de socios actual',
      variacion: 'Segmentacion lista',
      color: 'azul' as const,
    },
    {
      titulo: 'Clientes activos',
      valor: `${this.gimnasioServicio.clientes.filter((cliente) => cliente.estado === 'Activo').length}`,
      descripcion: 'Operacion saludable',
      variacion: 'Buen nivel de retencion',
      color: 'morado' as const,
    },
  ];
}
