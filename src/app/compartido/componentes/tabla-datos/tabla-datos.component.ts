import { Component, input } from '@angular/core';

interface ColumnaTabla {
  clave: string;
  titulo: string;
}

@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html',
  styleUrl: './tabla-datos.component.css',
})
export class TablaDatosComponent {
  readonly titulo = input.required<string>();
  readonly descripcion = input.required<string>();
  readonly columnas = input.required<ColumnaTabla[]>();
  readonly filas = input.required<Record<string, string | number>[]>();
}
