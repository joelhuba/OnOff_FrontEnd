import { Observable } from "rxjs"
import { PaginatorDTO } from "../../data-transfer-object/commons/paginator.dto"
import { ResponseDTO } from "../../data-transfer-object/commons/response.dto"
import { CreateUserDTO, UpdateUserDTO } from "../../data-transfer-object/users/user.dto"

export interface IUserService {
 GetAllUsers(paginatorDTO: PaginatorDTO): Observable<ResponseDTO>
 GetUserById(idUser: number): Observable<ResponseDTO>
 CreateUser(createUserDTO: CreateUserDTO): Observable<ResponseDTO>
 UpdateUser(updateUserDTO: UpdateUserDTO): Observable<ResponseDTO>
 DeleteUser(idUser: number): Observable<ResponseDTO>
}