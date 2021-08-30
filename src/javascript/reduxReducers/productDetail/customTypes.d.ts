export interface Images {
  cover: string;
  mini?: string;
  extra?: [string]
}

export interface Product {
  _id: string;
  nombre: string;
  marca: string;
  descripcion: string;
  estetica?: string;
  precioOnline: number;
  descuento: number;
  disponibles: number;
  categoria: Array<string>;
  images: Images;
  nuevo: boolean;
  countPurchases?: number;
}
export interface ReducerState {
  productDetail: Product | Record<string, never>;
}

export interface Action {
  type: string;
  payload: ReducerState | Product;
}