export interface RestToken {
  username: string;
  access: string;
  refresh: string;
  entidad: {
    id: number,
    usuario_id: number,
    nombre: string,
    apellidos: string,
    correo: string,
    nit: string,
    sexo: string
  };
}


export interface Entidad {
  entidad_id: number;
  entidad: EntidadData;
}

export interface EntidadData {
  id: number;
  usuario_id: number;
  nombres: string;
  apellidos: string;
  correo: string;
  nit: string;
  sexo: string;
  tipo: string;
}


// export interface Entidad {
//   nombres: string;
//   apellidos: string;
//   correo: string;
//   nit: string;
//   sexo: string;
//   tipo: string;
//   usuario_id: number;
//   id: number;
// }

export interface InfoTiket {
  id?: number;
  nombre: string;
  nit: string;
  direccion: string;
  comprador_id: number;
}

export interface Address {
  id?: number;
  nombre: string;
  direccion_exacta: string;
  referencias: string;
  pais_id: number;
  departamento_id: number;
  municipio_id: number;
  comprador_id: number;
}

