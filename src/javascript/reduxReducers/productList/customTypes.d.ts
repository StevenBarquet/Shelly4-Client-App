/* eslint-disable quotes */
export interface SearchParams{
  categoria: string;
  pageNumber?: number;
  pageSize?: number;
  descuento?: string;
  sortBy?: "{ \"nombre \": 1 }" |  "{ \"nombre \": -1 }" |  "{ \"marca\": 1 }" |  "{ \"marca\": -1 }" |  "{ \"precioOnline\": -1 }" |  "{ \"precioOnline\": 1 }" |  "{ \"countVisits\": 1 }" |  "{ \"countVisits\": -1 }" |  "{ \"countQuestions\": 1 }" |  "{ \"countQuestions\": -1 }" |  "{ \"countPurchases\": 1 }" |  "{ \"countPurchases\": -1 }";
}
export interface SearchParamsURL{
  categoria: string;
  pageNumber?: string;
  pageSize?: string;
  descuento?: string;
  sortBy?: "{ \"nombre \": 1 }" |  "{ \"nombre \": -1 }" |  "{ \"marca\": 1 }" |  "{ \"marca\": -1 }" |  "{ \"precioOnline\": -1 }" |  "{ \"precioOnline\": 1 }" |  "{ \"countVisits\": 1 }" |  "{ \"countVisits\": -1 }" |  "{ \"countQuestions\": 1 }" |  "{ \"countQuestions\": -1 }" |  "{ \"countPurchases\": 1 }" |  "{ \"countPurchases\": -1 }";
}

export interface Pagination{
  pageNumber: number;
  pageSize: number;
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

export interface ProductPayload {
  products: Array<Product> | [];
  productCount: number;
}

export interface ReducerState {
  searchParams: SearchParams;
  products: Array<Product> | [];
  productCount: number;
}

export interface Action {
  type: string;
  payload: ReducerState | SearchParams | ProductPayload | Pagination;
}