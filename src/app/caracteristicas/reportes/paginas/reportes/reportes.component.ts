import { Component, inject } from '@angular/core';
import { BloqueEstadoComponent } from '../../../../compartido/componentes/bloque-estado/bloque-estado.component';
import { TablaDatosComponent } from '../../../../compartido/componentes/tabla-datos/tabla-datos.component';
import { TarjetaMetricaComponent } from '../../../../compartido/componentes/tarjeta-metrica/tarjeta-metrica.component';
import { GimnasioServicio } from '../../../../core/servicios/gimnasio.servicio';

@Component({
  selector: 'app-reportes',
  imports: [TarjetaMetricaComponent, TablaDatosComponent, BloqueEstadoComponent],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css',
})
export class ReportesComponent {
  readonly gimnasioServicio = inject(GimnasioServicio);

  readonly indicadores = [
    {
      titulo: 'Retencion mensual',
      valor: '87%',
      descripcion: 'Clientes que renovaron',
      variacion: 'Meta trimestral cumplida',
      color: 'azul' as const,
    },
    {
      titulo: 'Mora controlada',
      valor: '19%',
      descripcion: 'Clientes con deuda activa',
      variacion: 'Bajo supervision',
      color: 'durazno' as const,
    },
  ];

  readonly reporteClientes = this.gimnasioServicio.clientes.map((cliente) => ({
    cliente: cliente.nombre,
    plan: cliente.plan,
    asistencia: `${cliente.asistenciaMes} visitas`,
    estado: cliente.estado,
    deuda: `S/ ${cliente.deuda}`,
  }));
}
