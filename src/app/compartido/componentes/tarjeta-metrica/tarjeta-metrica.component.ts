import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-metrica',
  templateUrl: './tarjeta-metrica.component.html',
  styleUrl: './tarjeta-metrica.component.css',
})
export class TarjetaMetricaComponent {
  readonly titulo = input.required<string>();
  readonly valor = input.required<string>();
  readonly descripcion = input.required<string>();
  readonly variacion = input.required<string>();
  readonly color = input<'azul' | 'morado' | 'coral' | 'durazno'>('azul');
}
