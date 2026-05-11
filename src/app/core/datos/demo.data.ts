import {
  Cliente,
  Pago,
  PlanMensualidad,
  RegistroAsistencia,
  Tendencia,
} from '../modelos/sistema.modelos';

export const CLIENTES_DEMO: Cliente[] = [
  {
    id: 1,
    nombre: 'Andrea Salazar',
    plan: 'Plan Elite',
    estado: 'Activo',
    ultimoPago: '2026-05-02',
    vencimiento: '2026-06-02',
    asistenciaMes: 19,
    deuda: 0,
  },
  {
    id: 2,
    nombre: 'Luis Herrera',
    plan: 'Plan Funcional',
    estado: 'Por vencer',
    ultimoPago: '2026-04-14',
    vencimiento: '2026-05-14',
    asistenciaMes: 14,
    deuda: 35,
  },
  {
    id: 3,
    nombre: 'Camila Torres',
    plan: 'Plan Full Time',
    estado: 'Activo',
    ultimoPago: '2026-05-08',
    vencimiento: '2026-06-08',
    asistenciaMes: 22,
    deuda: 0,
  },
  {
    id: 4,
    nombre: 'Jorge Meza',
    plan: 'Plan Inicio',
    estado: 'Suspendido',
    ultimoPago: '2026-03-22',
    vencimiento: '2026-04-22',
    asistenciaMes: 4,
    deuda: 60,
  },
  {
    id: 5,
    nombre: 'Rosa Paredes',
    plan: 'Plan Elite',
    estado: 'Activo',
    ultimoPago: '2026-05-04',
    vencimiento: '2026-06-04',
    asistenciaMes: 16,
    deuda: 0,
  },
  {
    id: 6,
    nombre: 'Kevin Ramos',
    plan: 'Plan Funcional',
    estado: 'Por vencer',
    ultimoPago: '2026-04-12',
    vencimiento: '2026-05-12',
    asistenciaMes: 12,
    deuda: 20,
  },
];

export const PLANES_DEMO: PlanMensualidad[] = [
  {
    id: 1,
    nombre: 'Plan Inicio',
    precio: 70,
    duracion: '30 dias',
    beneficios: ['Sala de pesas', 'Horario libre', 'Control basico'],
    color: 'durazno',
  },
  {
    id: 2,
    nombre: 'Plan Funcional',
    precio: 95,
    duracion: '30 dias',
    beneficios: ['Cross training', 'Rutinas guiadas', 'Control nutricional'],
    color: 'coral',
  },
  {
    id: 3,
    nombre: 'Plan Elite',
    precio: 130,
    duracion: '30 dias',
    beneficios: ['Acceso total', 'Coach personal', 'Seguimiento avanzado'],
    color: 'azul',
  },
  {
    id: 4,
    nombre: 'Plan Full Time',
    precio: 220,
    duracion: '90 dias',
    beneficios: ['Pago trimestral', 'Evaluacion fisica', 'Prioridad en clases'],
    color: 'morado',
  },
];

export const ASISTENCIAS_DEMO: RegistroAsistencia[] = [
  { id: 1, cliente: 'Andrea Salazar', fecha: '2026-05-11', hora: '06:05', acceso: 'Ingreso', area: 'Cardio' },
  { id: 2, cliente: 'Luis Herrera', fecha: '2026-05-11', hora: '06:18', acceso: 'Ingreso', area: 'Pesas' },
  { id: 3, cliente: 'Camila Torres', fecha: '2026-05-11', hora: '07:02', acceso: 'Ingreso', area: 'Funcional' },
  { id: 4, cliente: 'Rosa Paredes', fecha: '2026-05-11', hora: '07:41', acceso: 'Ingreso', area: 'Spinning' },
  { id: 5, cliente: 'Kevin Ramos', fecha: '2026-05-11', hora: '08:09', acceso: 'Salida', area: 'Pesas' },
  { id: 6, cliente: 'Jorge Meza', fecha: '2026-05-11', hora: '18:26', acceso: 'Ingreso', area: 'Cardio' },
];

export const PAGOS_DEMO: Pago[] = [
  { id: 1, cliente: 'Andrea Salazar', concepto: 'Mensualidad mayo', monto: 130, metodo: 'Yape', fecha: '2026-05-02', estado: 'Pagado' },
  { id: 2, cliente: 'Luis Herrera', concepto: 'Reactivacion', monto: 35, metodo: 'Caja', fecha: '2026-05-10', estado: 'Pendiente' },
  { id: 3, cliente: 'Camila Torres', concepto: 'Mensualidad mayo', monto: 220, metodo: 'Transferencia', fecha: '2026-05-08', estado: 'Pagado' },
  { id: 4, cliente: 'Jorge Meza', concepto: 'Deuda abril', monto: 60, metodo: 'Caja', fecha: '2026-05-01', estado: 'Vencido' },
  { id: 5, cliente: 'Rosa Paredes', concepto: 'Mensualidad mayo', monto: 130, metodo: 'Tarjeta', fecha: '2026-05-04', estado: 'Pagado' },
  { id: 6, cliente: 'Kevin Ramos', concepto: 'Complemento de plan', monto: 20, metodo: 'Yape', fecha: '2026-05-11', estado: 'Pendiente' },
];

export const ASISTENCIA_SEMANAL_DEMO: Tendencia[] = [
  { etiqueta: 'Lun', valor: 82, meta: 90 },
  { etiqueta: 'Mar', valor: 76, meta: 90 },
  { etiqueta: 'Mie', valor: 88, meta: 90 },
  { etiqueta: 'Jue', valor: 94, meta: 90 },
  { etiqueta: 'Vie', valor: 91, meta: 90 },
  { etiqueta: 'Sab', valor: 67, meta: 70 },
];

export const INGRESOS_MENSUALES_DEMO: Tendencia[] = [
  { etiqueta: 'Ene', valor: 4200 },
  { etiqueta: 'Feb', valor: 4680 },
  { etiqueta: 'Mar', valor: 5120 },
  { etiqueta: 'Abr', valor: 5450 },
  { etiqueta: 'May', valor: 5980 },
];
