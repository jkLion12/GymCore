import { Component, inject } from '@angular/core';
import { TablaDatosComponent } from '../../../../compartido/componentes/tabla-datos/tabla-datos.component';
import { TarjetaMetricaComponent } from '../../../../compartido/componentes/tarjeta-metrica/tarjeta-metrica.component';
import { GimnasioServicio } from '../../../../core/servicios/gimnasio.servicio';

@Component({
  selector: 'app-pagos',
  imports: [TarjetaMetricaComponent, TablaDatosComponent],
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.css',
})
export class PagosComponent {
  private readonly gimnasioServicio = inject(GimnasioServicio);

  readonly pagos = this.gimnasioServicio.pagos.map((pago) => ({
    cliente: pago.cliente,
    concepto: pago.concepto,
    monto: `S/ ${pago.monto}`,
    metodo: pago.metodo,
    fecha: pago.fecha,
    estado: pago.estado,
  }));

  readonly indicadores = [
    {
      titulo: 'Pagos confirmados',
      valor: `${this.gimnasioServicio.pagos.filter((pago) => pago.estado === 'Pagado').length}`,
      descripcion: 'Cobros cerrados correctamente',
      variacion: 'Caja actualizada',
      color: 'azul' as const,
    },
    {
      titulo: 'Pagos pendientes',
      valor: `${this.gimnasioServicio.pagos.filter((pago) => pago.estado === 'Pendiente').length}`,
      descripcion: 'Requiere contacto comercial',
      variacion: 'Seguimiento activo',
      color: 'coral' as const,
    },
    {
      titulo: 'Pagos vencidos',
      valor: `${this.gimnasioServicio.pagos.filter((pago) => pago.estado === 'Vencido').length}`,
      descripcion: 'Riesgo de fuga',
      variacion: 'Atender hoy',
      color: 'durazno' as const,
    },
  ];
}
