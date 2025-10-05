import { Observable } from 'rxjs';
import { ResponseDTO } from '../../data-transfer-object/commons/response.dto';


export interface IHttpService {
  get(endpoint: string, parameters : any): Observable<ResponseDTO>;
  post(endpoint: string, data: any): Observable<ResponseDTO>;
  put(endpoint: string, data: any): Observable<ResponseDTO>;
  delete(endpoint: string, parameters : any): Observable<ResponseDTO>;
}
