import { Observable } from 'rxjs';
import { PaginatorDTO } from '../../data-transfer-object/commons/paginator.dto';
import { ResponseDTO } from '../../data-transfer-object/commons/response.dto';
import { CreateTaskDTO, UpdateTaskDTO } from '../../data-transfer-object/tasks/tasks.dto';
export interface ITasksService {
 GetAllTasks(paginatorDTO : PaginatorDTO,idUser:number):Observable<ResponseDTO>
 GetTaskById(idTask:number):Observable<ResponseDTO>
 CreateTask(createTaskDTO: CreateTaskDTO):Observable<ResponseDTO>
 UpdateTask(updateTaskDTO: UpdateTaskDTO):Observable<ResponseDTO>
 DeleteTask(idTask:number):Observable<ResponseDTO>
} 