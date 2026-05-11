import { Routes } from '@angular/router';
import { AsistenciasComponent } from './caracteristicas/asistencias/paginas/asistencias/asistencias.component';
import { InicioSesionComponent } from './caracteristicas/autenticacion/paginas/inicio-sesion/inicio-sesion.component';
import { ClientesComponent } from './caracteristicas/clientes/paginas/clientes/clientes.component';
import { MensualidadesComponent } from './caracteristicas/mensualidades/paginas/mensualidades/mensualidades.component';
import { PagosComponent } from './caracteristicas/pagos/paginas/pagos/pagos.component';
import { PanelPrincipalComponent } from './caracteristicas/panel/paginas/panel-principal/panel-principal.component';
import { ReportesComponent } from './caracteristicas/reportes/paginas/reportes/reportes.component';
import { DisenoSistemaComponent } from './caracteristicas/sistema/componentes/diseno-sistema/diseno-sistema.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: InicioSesionComponent,
  },
  {
    path: 'sistema',
    component: DisenoSistemaComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'panel',
      },
      {
        path: 'panel',
        component: PanelPrincipalComponent,
      },
      {
        path: 'clientes',
        component: ClientesComponent,
      },
      {
        path: 'mensualidades',
        component: MensualidadesComponent,
      },
      {
        path: 'asistencias',
        component: AsistenciasComponent,
      },
      {
        path: 'pagos',
        component: PagosComponent,
      },
      {
        path: 'reportes',
        component: ReportesComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
