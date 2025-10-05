import { Injectable } from '@angular/core';
import { ConfigService } from '../common/config/config.service';
import { HttpService } from '../http-services/http-service.service';
import { ResponseDTO } from '../../../core/data-transfer-object/commons/response.dto';
import { Observable, switchMap } from 'rxjs';
import { CreateTaskDTO, UpdateTaskDTO } from '../../../core/data-transfer-object/tasks/tasks.dto';
import { PaginatorDTO } from '../../../core/data-transfer-object/commons/paginator.dto';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(
    private _httpService: HttpService,
    private _configService: ConfigService
  ) { }

  CreateTask(createTaskDTO: CreateTaskDTO): Observable<ResponseDTO> {
    return this._configService.getUrl().pipe(
      switchMap(url => {
        return this._httpService.post(url, "CreateTask", null, createTaskDTO);
      })
    );
  }
  DeleteTask(idTask: number): Observable<ResponseDTO> {
    return this._configService.getUrl().pipe(
      switchMap(url => {
        let params: any = {
          idTask
        }
        return this._httpService.delete(url, "DeleteTask", params);
      })
    );
  }
  GetAllTasks(paginatorDto: PaginatorDTO, idUser: number, isCompleted?: boolean): Observable<ResponseDTO> {
    return this._configService.getUrl().pipe(
      switchMap(url => {
        let params: any = {
          idUser,
          PageIndex: paginatorDto.pageIndex,
          PageSize: paginatorDto.pageSize,
          IsCompleted: isCompleted
        }
        return this._httpService.get<ResponseDTO>(url, "GetAllTasks", params);
      })
    );
  }
  UpdateTask(updateTaskDTO: UpdateTaskDTO): Observable<ResponseDTO> {
    return this._configService.getUrl().pipe(
      switchMap(url => {
        return this._httpService.put(url, "UpdateTask", null, updateTaskDTO);
      })
    );  
  }

}
