import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-barra-lateral',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './barra-lateral.component.html',
  styleUrl: './barra-lateral.component.css',
})
export class BarraLateralComponent {
  readonly menu = [
    { etiqueta: 'Panel general', ruta: '/sistema/panel', icono: 'panel', ayuda: 'Resumen del negocio' },
    { etiqueta: 'Clientes', ruta: '/sistema/clientes', icono: 'clientes', ayuda: 'Padron y seguimiento' },
    { etiqueta: 'Mensualidades', ruta: '/sistema/mensualidades', icono: 'membresias', ayuda: 'Planes y renovaciones' },
    { etiqueta: 'Asistencias', ruta: '/sistema/asistencias', icono: 'asistencias', ayuda: 'Control de accesos' },
    { etiqueta: 'Pagos', ruta: '/sistema/pagos', icono: 'pagos', ayuda: 'Caja y cobranzas' },
    { etiqueta: 'Reportes', ruta: '/sistema/reportes', icono: 'reportes', ayuda: 'Indicadores y analitica' },
  ];
}
