export interface Action {
  type: string;
  payload: boolean | string;
}

export interface ReducerState {
  banners: Array<>;
  isLoading: boolean;
  currentPath: string;
  currentParams: string;
}