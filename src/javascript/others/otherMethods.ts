import { RandArray, RandObj } from '@Declarations'

export const priceFormat = (number: number) : string => {
  if (typeof number !== 'number') return '0';
  // A partir de un int o float genera un string con formato de precio ($1,000.00)
  const money = new Intl
    .NumberFormat('en-IN', {style: 'currency', currency: 'USD'})
    .format(number)

  return money;
};

export const copyToEnd = (str: string, index: number ) : string => {
  // Copia una cadena a partir del index indicado
  let copy = '';
  for (let i = index; i < str.length; i++) {
    copy += str[i];
  }
  return copy;
};

export const copyToIndex = (str: string, index: number ) : string => {
  // Copia una cadena hasta el index indicado
  let copy = '';
  for (let i = 0; i <= index; i++) {
    copy += str[i];
  }
  return copy;
};

export const copyFromOneIndexToOther = (str: string, index1: number, index2: number ) : string => {
  // Copia una cadena hasta el index indicado
  let copy = '';
  for (let i = index1; i <= index2; i++) {
    copy += str[i];
  }
  return copy;
};

export const findIndexArrayObj = (array: Array<RandObj>, obj: RandObj): number => {
  const value = Object.values(obj)[0];
  const isValueEqual = (element: unknown) => element === value; // Criterio de búsqueda para un mapeo
  let i;
  let found = false;
  for (i = 0; i < array.length; i++) {
    const values = Object.values(array[i]);
    if (values.findIndex(isValueEqual) !== -1) {
      found = true;
      break;
    }
  }
  return found ? i : -1;
};

export const searchProductByID = (items: Array<RandObj>, id: string ) : number | null => {
  // Busca el index de un id específico en un array con key llamada "_id"
  let found = null;
  items.forEach((item, index) => {
    if (item._id === id) found = index;
  });
  return found;
};

export const searchObjectByProp = (items: Array<RandObj>, key: string, value: unknown) : number | null => {
  // Busca el index de un id específico en un array con key llamada "_id"
  let found = null;
  items.forEach((item, index) => {
    if (item[key] === value) found = index;
  });
  return found;
};

export const arrayWithoutIndex = (array: RandArray, skipIndex: number) : RandArray => {
  let newArray : RandArray = [];
  array.forEach((element, index) => {
    if (index !== skipIndex) {
      newArray = [...newArray, element];
    }
  });
  return newArray;
};

export const arrayElementSustitution = (array: RandArray, elementIndex: number, newElement: RandObj | number | string ): RandArray => {
  let newArray : RandArray = [];
  array.forEach((element, index) => {
    if (index === elementIndex) {
      newArray = [...newArray, newElement];
    } else {
      newArray = [...newArray, element];
    }
  });
  return newArray;
};

export const getOneParam = (cadena: string) : string => {
  // obtiene el param de una url cuando sólo existe 1
  const indexStart = cadena.search(':');

  if (indexStart && indexStart !== -1) {
    const param = copyToEnd(cadena, indexStart + 1);
    return param;
  }
  return '';
};

export const getStringKey = (cadena: string): string => {
  // obtiene el key de un string como "key: value"
  const indexFinish = cadena.search(':');

  if (indexFinish && indexFinish !== -1) {
    const key = copyToIndex(cadena, indexFinish - 1);
    return key;
  }
  return '';
};

export const isId = (cadena: string): boolean => {
  // regex valida una palabra continua que sólo puede contener letras numeros y '-'
  return /^[0-9a-fA-F]{24}$/.test(cadena);
};

export function ignoreArgs(someObj: RandObj, args: Array<string>) : RandObj {
  const keys = Object.keys(someObj);
  const values = Object.values(someObj);
  let newData = {};
  let doCopy = true;

  keys.forEach((key, i) => {
    args.forEach(arg => {
      if (key === arg) {
        doCopy = false;
      }
    });
    newData = doCopy ? { ...newData, [key]: values[i] } : newData;
    doCopy = true;
  });
  return newData;
}
export function selectArgs(someObj: RandObj, args: Array<string>): RandObj {
  const keys = Object.keys(someObj);
  const values = Object.values(someObj);
  let newData = {};
  let doCopy = false;

  keys.forEach((key, i) => {
    args.forEach(arg => {
      if (key === arg) {
        doCopy = true;
      }
    });
    newData = doCopy ? { ...newData, [key]: values[i] } : newData;
    doCopy = false;
  });
  return newData;
}

export function genRandomString(length: number) : string {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function removeNullProperties(obj: RandObj) : RandObj {
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    const hasProperties = value && Object.keys(<RandObj>value).length > 0;
    if (value === null || value === undefined) {
      delete obj[key];
    } else if (typeof value !== 'string' && hasProperties) {
      removeNullProperties(<RandObj> value);
    }
  });
  return obj;
}
export function removeEmptyAndNull(obj: RandObj) : RandObj {
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    const hasProperties = value && Object.keys(<RandObj>value).length > 0;
    if (value === null || value === undefined || value === '') {
      delete obj[key];
    } else if (typeof value !== 'string' && hasProperties) {
      removeNullProperties(<RandObj>value);
    }
  });
  return obj;
}
export function removeBlankProperties(obj: RandObj) : RandObj {
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    const hasProperties = value && Object.keys(<RandObj>value).length > 0;
    if (value === '') {
      delete obj[key];
    } else if (typeof value !== 'string' && hasProperties) {
      removeBlankProperties(<RandObj>value);
    }
  });
  return obj;
}

export function getWordsArray(str: string) : Array<string> {
  return str.split(' ');
}

export function makeWordsArray(str: Array<string>) : string {
  return str.join(' ');
}
export function stringToObject ( query: string) : RandObj | null {
  console.log('validating: ', query);
  /*
      Parse string from this:
          ?abc=foo&def=%5Basf%5D&xyz=5
          ?categoria=Videojuegos&searchedValue=%27{%20%22date%22:%20-1%20}%27
      To this:
         {
            abc: 'foo',
            def: '[asf]',
            xyz: 5
          }
 
  */

  const isValid = /^(\?[a-zA-Z][a-zA-Z0-9_]+=[a-zA-Z0-9 %_:{}-]+)(&[a-zA-Z][a-zA-Z0-9_]+=[a-zA-Z0-9 %_:{}-]+)*$/i.test(query)

  if(isValid){
    const str = query.substr(1,query.length)
    return JSON.parse('{"' + decodeURI(str).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
  }
  return null
}