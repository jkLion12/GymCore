import { Component, inject } from '@angular/core';
import { BloqueEstadoComponent } from '../../../../compartido/componentes/bloque-estado/bloque-estado.component';
import { TablaDatosComponent } from '../../../../compartido/componentes/tabla-datos/tabla-datos.component';
import { GimnasioServicio } from '../../../../core/servicios/gimnasio.servicio';

@Component({
  selector: 'app-asistencias',
  imports: [TablaDatosComponent, BloqueEstadoComponent],
  templateUrl: './asistencias.component.html',
  styleUrl: './asistencias.component.css',
})
export class AsistenciasComponent {
  readonly gimnasioServicio = inject(GimnasioServicio);

  readonly registros = this.gimnasioServicio.asistencias.map((item) => ({
    cliente: item.cliente,
    fecha: item.fecha,
    hora: item.hora,
    acceso: item.acceso,
    area: item.area,
  }));

  readonly horasPico = [
    { etiqueta: '06:00 - 08:00', valor: 92, meta: 100 },
    { etiqueta: '12:00 - 14:00', valor: 54, meta: 100 },
    { etiqueta: '18:00 - 21:00', valor: 97, meta: 100 },
  ];
}
