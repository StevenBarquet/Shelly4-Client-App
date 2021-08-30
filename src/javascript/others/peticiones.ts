// ---Dependencys
import axios from 'axios';
// ---Types
import { AxiosHandler } from '@Declarations';
// ---Others
import { ownerData } from 'Others/store-config';

const envType = process.env.NODE_ENV;

export const urlServer =
  envType === 'development'
    ? 'http://localhost:4000/'
    : `https://${ownerData.domain}:4000/`;
// export const urlServer = 'https://shelly-store.com:4000/';
// export const urlServer = 'http://localhost:4000/';

// -------------------------------------------Home---------------------------------------
export async function getHomePublic() : Promise<AxiosHandler> {
  const endpoint = 'client/home/getHome';
  const url = urlServer + endpoint;
  try {
    const respose = await axios(url, {
      method: 'get',
      withCredentials: false
    });
    return respose;
  } catch (error) {
    return error;
  }
}

export async function getHomeProducts(data: unknown) : Promise<AxiosHandler> {
  const endpoint = 'client/home/getProducts';
  const url = urlServer + endpoint;
  try {
    const respose = await axios(url, {
      method: 'post',
      data,
      withCredentials: false
    });
    return respose;
  } catch (error) {
    return error;
  }
}
// -------------------------------------------PRODUCTOS---------------------------------------
export async function searchProducts(data: unknown) : Promise<AxiosHandler> {
  const endpoint = 'client/productos/buscar';
  const url = urlServer + endpoint;
  try {
    const respose = await axios(url, {
      data,
      method: 'post',
      withCredentials: false
    });
    return respose;
  } catch (error) {
    return error;
  }
}
// -------------------------------------------DETALLE P---------------------------------------
export async function getProductRequest(id: string | unknown) : Promise<AxiosHandler> {
  const endpoint = `client/productos/${id as string}`;
  const url = urlServer + endpoint;
  try {
    const respose = await axios(url, {
      method: 'get',
      withCredentials: false
    });
    return respose;
  } catch (error) {
    return error;
  }
}