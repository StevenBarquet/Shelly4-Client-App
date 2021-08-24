// ---Dependencys
import axios from 'axios';
// ---Types
import { AxiosHandler } from '@Declarations';
// ---Others
import { ownerData } from 'Others/store-data.json';

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
      withCredentials: true
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
      withCredentials: true
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
      withCredentials: true
    });
    return respose;
  } catch (error) {
    return error;
  }
}