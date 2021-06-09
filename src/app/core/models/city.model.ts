export interface Contry {
  id: number;
  nombre: string;
}

export interface Departamento {
  id: number;
  nombre: string;
  pais: number;
}

export interface Municipio {
  id: number;
  nombre: string;
  departamento: number;
}

export interface Address {
  comprador_id: number;
  departamento_id: number;
  direccion_exacta: string;
  id: number;
  municipio_id: number;
  pais_id: number;
  referencias: string;
  nombre?: string;
  telefono: string;
}
