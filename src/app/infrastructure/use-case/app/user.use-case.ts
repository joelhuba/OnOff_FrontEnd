import { Injectable } from "@angular/core";
import { UserService } from "../../service/app/user.service";
import { CreateUserDTO, UpdateUserDTO } from "../../../core/data-transfer-object/users/user.dto";
import { map, Observable } from "rxjs";
import { ResponseDTO } from "../../../core/data-transfer-object/commons/response.dto";
import { NotificationsService } from "../../service/common/notifications/notifications.service";
import { PaginatorDTO } from '../../../core/data-transfer-object/commons/paginator.dto';

@Injectable({
    providedIn: "root",
})
export class UserUseCase {

    constructor(private _userService: UserService, private _notificationService: NotificationsService) { }

    getAllUsers(paginator: PaginatorDTO, email?: string): Observable<ResponseDTO> {
        return this._userService.GetAllUsers(paginator, email).pipe(
      map((response: ResponseDTO) => {
        if (!response.isSuccess) {
          this._notificationService.showToastErrorMessage(response.message!);
        } 
        return response.data;
      })
    );
    }

    getUserById(idUser: number): Observable<ResponseDTO> {
         return this._userService.GetUserById(idUser).pipe(
      map((response: ResponseDTO) => {
        if (!response.isSuccess) {
          this._notificationService.showToastErrorMessage(response.message!);
        } 
        return response.data;
      })
    );
    }

    CreateUser(user: CreateUserDTO): Observable<boolean> {
    return this._userService.CreateUser(user).pipe(
      map((response: ResponseDTO) => {
        if (!response.isSuccess) {
          this._notificationService.showToastErrorMessage(response.message!);
        } else {
          this._notificationService.showToastSuccessMessage(response.message!);
        }
        return response.data;
      })
    );
  }

    UpdateUser(user: UpdateUserDTO): Observable<boolean> {
    return this._userService.UpdateUser(user).pipe(
      map((response: ResponseDTO) => {
        if (!response.isSuccess) {
          this._notificationService.showToastErrorMessage(response.message!);
        } else {
          this._notificationService.showToastSuccessMessage(response.message!);
        }
        return response.data;
      })
    );
  }


   DeleteUser(idUser: number): Observable<boolean> {
    return this._userService.DeleteUser(idUser).pipe(
      map((response: ResponseDTO) => {
        if (!response.isSuccess) {
          this._notificationService.showToastErrorMessage(response.message!);
        } else {
          this._notificationService.showToastSuccessMessage(response.message!);
        }
        return response.data;
      })
    );
  }
}
