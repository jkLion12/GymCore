import { Injectable } from '@angular/core';
import {
  ASISTENCIAS_DEMO,
  ASISTENCIA_SEMANAL_DEMO,
  CLIENTES_DEMO,
  INGRESOS_MENSUALES_DEMO,
  PAGOS_DEMO,
  PLANES_DEMO,
} from '../datos/demo.data';
import { Indicador } from '../modelos/sistema.modelos';

@Injectable({
  providedIn: 'root',
})
export class GimnasioServicio {
  readonly clientes = CLIENTES_DEMO;
  readonly planes = PLANES_DEMO;
  readonly asistencias = ASISTENCIAS_DEMO;
  readonly pagos = PAGOS_DEMO;
  readonly asistenciaSemanal = ASISTENCIA_SEMANAL_DEMO;
  readonly ingresosMensuales = INGRESOS_MENSUALES_DEMO;

  obtenerIndicadoresPrincipales(): Indicador[] {
    const clientesActivos = this.clientes.filter((cliente) => cliente.estado === 'Activo').length;
    const pagosPendientes = this.pagos.filter((pago) => pago.estado !== 'Pagado').length;
    const ingresosMes = this.pagos
      .filter((pago) => pago.estado === 'Pagado')
      .reduce((total, pago) => total + pago.monto, 0);
    const asistenciasHoy = this.asistencias.filter((registro) => registro.fecha === '2026-05-11').length;

    return [
      {
        titulo: 'Clientes activos',
        valor: `${clientesActivos}`,
        descripcion: 'Socios con membresia vigente',
        variacion: '+8% vs mes anterior',
        color: 'azul',
      },
      {
        titulo: 'Ingresos del mes',
        valor: `S/ ${ingresosMes}`,
        descripcion: 'Cobros registrados y confirmados',
        variacion: '+12% de crecimiento',
        color: 'morado',
      },
      {
        titulo: 'Asistencias hoy',
        valor: `${asistenciasHoy}`,
        descripcion: 'Entradas y salidas monitoreadas',
        variacion: 'Pico fuerte en la manana',
        color: 'coral',
      },
      {
        titulo: 'Pagos por resolver',
        valor: `${pagosPendientes}`,
        descripcion: 'Pendientes o vencidos',
        variacion: 'Requiere seguimiento diario',
        color: 'durazno',
      },
    ];
  }

  obtenerClientesPorVencer() {
    return this.clientes.filter((cliente) => cliente.estado === 'Por vencer' || cliente.deuda > 0);
  }
}
