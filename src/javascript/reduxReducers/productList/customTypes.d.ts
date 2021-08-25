export interface SearchParams{
  categoria: string;
  pageNumber?: number;
  pageSize?: number;
  descuento?: string;
  marca?: number;
  nombre?: number;
  precioOnline?: number;
  countVisits?: number;
  countQuestions?: number;
  countPurchases?: number;
}

export interface ReducerState {
  searchParams: SearchParams;
}

export interface Action {
  type: string;
  payload: ReducerState | SearchParams;
}