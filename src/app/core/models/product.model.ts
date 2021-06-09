export interface Product {
  id: number;
  nombre: string;
  precio_venta: number;
  cantidad: number;
  puntuacion: number;
  estado: string;
  peso: string;
  codigo: string;
  unidad_medida: string;
  mongo_id: number;
  serie: string;
  modelo: string;
  marca: string;
  codigo_barra: string;
  imagenes: Imagene[];
  imagen: string;
  creado: string;
  editado: string;
  tienda_id: number;
  categoria: number;
  combinacion: any;
  agrupador: AgrupadorObj;
  descripcion?: string;
}

export interface AgrupadorObj {
  id: number;
  nombre: string;
  combinaciones: any[];
  tienda: number;
}

export interface Imagene {
  id: number;
  producto_id: number;
  imagen: string;
}


export interface Order {
  id: number;
  comprador_id: number;
  valor: string;
  iva: string;
  estado_id: number;
  nit: string;
  nombre_factura: string;
  direccion_factura: string;
  direccion_exacta: string;
  referencias: string;
  pais_id: number;
  departamento_id: number;
  municipio_id: number;
  telefono: string;
  creado: string;
  editado: string;
  detalles: OrderDetails[];
  estado: string;
  imagen?: string;
  valor_envio?: string;
}

export interface OrderDetails {
  id: number;
  valor: number;
  cantidad: number;
  precio_unitario: number;
  iva: number | string;
  descuento: number;
  producto_id: number;
  tienda_id: number;
  vendedor_id?: number;
  name?: string;
  tienda?: number;
  imagen?: string;
  producto?: any;
}


export interface OrderList {
  comprador_id: number;
  creado: Date;
  departamento_id: number;
  direccion_exacta: string;
  direccion_factura: string;
  editado: Date;
  estado: string;
  id: number;
  iva: number;
  municipio_id: number;
  nit: string;
  nombre_factura: string;
  pais_id: number;
  referencias: string;
  telefono: string;
  tipo_pago: string;
  valor: number;
}

export interface Pay {
  id: number;
  pedido_id: number;
  tipo_pago: string;
  valor: number;
  confirmado: boolean;
  valido: boolean;
  fecha: string;
  documento_banco: string;
  numero_tarjeta: string;
  autorizacion: string;
  emisor: string;
}

export interface SearchParams {
  categoria_id: number;
  parametro: string;
}

export interface Cupon {
  id: number;
  tienda_id: number;
  codigo: string;
  disponibles: number;
  porcentaje: number;
  comprador_id: number;
}
