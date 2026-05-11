export interface Cliente {
  id: number;
  nombre: string;
  plan: string;
  estado: 'Activo' | 'Por vencer' | 'Suspendido';
  ultimoPago: string;
  vencimiento: string;
  asistenciaMes: number;
  deuda: number;
}

export interface PlanMensualidad {
  id: number;
  nombre: string;
  precio: number;
  duracion: string;
  beneficios: string[];
  color: string;
}

export interface RegistroAsistencia {
  id: number;
  cliente: string;
  fecha: string;
  hora: string;
  acceso: 'Ingreso' | 'Salida';
  area: string;
}

export interface Pago {
  id: number;
  cliente: string;
  concepto: string;
  monto: number;
  metodo: string;
  fecha: string;
  estado: 'Pagado' | 'Pendiente' | 'Vencido';
}

export interface Indicador {
  titulo: string;
  valor: string;
  descripcion: string;
  variacion: string;
  color: 'azul' | 'morado' | 'coral' | 'durazno';
}

export interface Tendencia {
  etiqueta: string;
  valor: number;
  meta?: number;
}
