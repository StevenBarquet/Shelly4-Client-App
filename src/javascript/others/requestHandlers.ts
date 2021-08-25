// ---Dependencys
import { message } from 'antd';
// ---Types
// ---Types
import { AxiosHandler } from '@Declarations';
import { AxiosResponse } from 'axios';
// ---CommonComps
import ModalError from 'Utils/ModalError';

// ---------------------------------------AUX METHODS--------------------------------------
export function testSuccess(response: unknown) : void {
  console.log('testSuccess este:  --->', response);
}

export function testError(response: unknown) : null {
  console.log('testError este: --->', response);
  return null;
}
// ------------------------------------------ TYPES-----------------------------------------
type ReqFunc = (requestData: unknown ) => Promise<AxiosHandler>;
type SuccessFunc = (successData1?: any, successData2?: unknown ) => any;
type RejectFunc = (requestData: unknown ) => any;
// ------------------------------------------ MAIN-----------------------------------------
export function asyncHandler(
  requestFunction: ReqFunc,
  successFunction: SuccessFunc,
  rejectFunction: RejectFunc,
  requestData?: unknown,
  successData?: unknown
) : void {
  requestFunction(requestData || null).then(res => {
    if ('response' in res) {
      ModalError(
        'Error en la solicitud',
        res.response?.data.errorType || 'Error en la petición'
      );
      rejectFunction(res.response?.data);
    } else {
      message.success('Solicitud exitosa');
      successFunction((res as  AxiosResponse<any> ).data, successData);
    }
  });
}