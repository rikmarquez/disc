// Usuario types
export interface Usuario {
  id: string;
  email: string;
  nombre: string;
}

// Empresa types
export interface Empresa {
  id: string;
  nombre: string;
  razonSocial?: string;
  contacto?: string;
  email?: string;
  telefono?: string;
  createdAt: string;
  updatedAt: string;
}

// Encuestado types
export interface Encuestado {
  id: string;
  codigo: string;
  nombre: string;
  email?: string;
  puesto?: string;
  departamento?: string;
  empresaId: string;
  empresa?: Empresa;
  status: 'PENDIENTE' | 'EN_PROCESO' | 'COMPLETADO';
  fechaInicio?: string;
  fechaCompletado?: string;
  createdAt: string;
  updatedAt: string;
}

// Pregunta types
export interface Pregunta {
  id: string;
  numero: number;
  bloque: number;
  texto: string;
  opcionA: string;
  opcionB: string;
  opcionC: string;
  opcionD: string;
  claveA: string;
  claveB: string;
  claveC: string;
  claveD: string;
}

// Resultado types
export interface Resultado {
  id: string;
  encuestadoId: string;
  puntosD: number;
  puntosI: number;
  puntosS: number;
  puntosC: number;
  perfilPrimario: string;
  perfilSecundario: string;
  arquetipo: string;
  createdAt: string;
}

// Auth types
export interface AuthResponse {
  token: string;
  usuario: Usuario;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  nombre: string;
}
