import { Injectable } from '@angular/core';
import { HttpService } from '../http-services/http-service.service';
import { ConfigService } from '../common/config/config.service';
import { CreateUserDTO, UpdateUserDTO } from '../../../core/data-transfer-object/users/user.dto';
import { Observable, switchMap } from 'rxjs';
import { ResponseDTO } from '../../../core/data-transfer-object/commons/response.dto';
import { PaginatorDTO } from '../../../core/data-transfer-object/commons/paginator.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _httpService: HttpService,
    private _configService: ConfigService
  ) { }

  CreateUser(createUserDTO: CreateUserDTO) :Observable<ResponseDTO>{
     return this._configService.getUrl().pipe(
      switchMap(url => {
        return this._httpService.post(url, "CreateUser", null, createUserDTO);
      })
    );
  }
  UpdateUser(UpdateUserDTO: UpdateUserDTO) :Observable<ResponseDTO>{
      return this._configService.getUrl().pipe(
      switchMap(url => {
        return this._httpService.put(url, "UpdateUser", null, UpdateUserDTO);
      })
    );
  }
  DeleteUser(idUser: number): Observable<ResponseDTO> {
    return this._configService.getUrl().pipe(
      switchMap(url => {
        let params: any = {
          idUser
        }
        return this._httpService.delete(url, "DeleteUser", params);
      })
    );
  }
  GetAllUsers(paginatorDto:PaginatorDTO,email?:string): Observable<ResponseDTO> {
    return this._configService.getUrl().pipe(
      switchMap(url => {
        let params: any = {
          PageIndex : paginatorDto.pageIndex,
          PageSize : paginatorDto.pageSize,
          Email : email
        }
        return this._httpService.get<ResponseDTO>(url, "GetAllUsers", params);
      })
    );
  }
  GetUserById(idUser: number): Observable<ResponseDTO> {
    return this._configService.getUrl().pipe(
      switchMap(url => {
        let params: any = {
          idUser
        }
        return this._httpService.get<ResponseDTO>(url, "GetUserById", params);
      })
    );  
  }
}
