import { Component, input } from '@angular/core';
import { Tendencia } from '../../../core/modelos/sistema.modelos';

@Component({
  selector: 'app-bloque-estado',
  templateUrl: './bloque-estado.component.html',
  styleUrl: './bloque-estado.component.css',
})
export class BloqueEstadoComponent {
  readonly titulo = input.required<string>();
  readonly descripcion = input.required<string>();
  readonly elementos = input.required<Tendencia[]>();
  readonly color = input<'azul' | 'coral'>('azul');
}
