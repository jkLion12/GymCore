import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraLateralComponent } from '../../../../compartido/componentes/barra-lateral/barra-lateral.component';
import { BarraSuperiorComponent } from '../../../../compartido/componentes/barra-superior/barra-superior.component';

@Component({
  selector: 'app-diseno-sistema',
  imports: [RouterOutlet, BarraLateralComponent, BarraSuperiorComponent],
  templateUrl: './diseno-sistema.component.html',
  styleUrl: './diseno-sistema.component.css',
})
export class DisenoSistemaComponent {}
