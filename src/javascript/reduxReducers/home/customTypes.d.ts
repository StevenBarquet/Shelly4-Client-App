interface Banner {
  _id: string;
  imgDesk: string;
  imgMovil: string;
  link?: string;
  text?: string;
  textColor?: string;
  visible: boolean
}

export interface Products {
  _id: string;
  productID: string;
  sortIndex: number;
}

interface Images {
  cover: string;
}

export interface Product {
  _id: string;
  nombre: string;
  precioOnline: number;
  descuento: number;
  disponibles: number;
  categoria: Array<string>;
  images: Images;
}

export interface ReducerState {
  banners: Array<Banner>;
  products: Array<Products>;
  paragraph: string;
  paragraphImg: string;
  notice?: string;
  location?: string;
  productsData?: Array<Product>
}

export interface Action {
  type: string;
  payload: ReducerState | Array<Product>;
}