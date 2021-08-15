export interface Action {
  type: string;
  payload: boolean | string;
}

export interface ReducerState {
  isMovil: boolean;
  isLoading: boolean;
  currentPath: string;
  currentParams: string;
}