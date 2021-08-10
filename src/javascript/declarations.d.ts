export declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  };
  
  module '*.png';
}

export type RandObj = { [s: string]: unknown; }

export type RandArray = any[] | Array<unknown>