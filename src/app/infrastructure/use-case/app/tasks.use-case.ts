import { Injectable } from "@angular/core";
import { CreateTaskDTO, UpdateTaskDTO } from '../../../core/data-transfer-object/tasks/tasks.dto';
import { NotificationsService } from "../../service/common/notifications/notifications.service";
import { TasksService } from "../../service/app/tasks.service";
import { ResponseDTO } from "../../../core/data-transfer-object/commons/response.dto";
import { map } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class TasksUseCase{
constructor(private _tasksService: TasksService, private _notificationService: NotificationsService) {}

    CreateTask(createTasktDto:CreateTaskDTO){
        return this._tasksService.CreateTask(createTasktDto).pipe(
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
    UpdateTask(updateTaskDto:UpdateTaskDTO){
        return this._tasksService.UpdateTask(updateTaskDto).pipe(
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
    DeleteTask(idTask: number) {
        return this._tasksService.DeleteTask(idTask).pipe(
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
    GetAllTasks(paginatorDto:any, idUser:number, isCompleted?:boolean){
        return this._tasksService.GetAllTasks(paginatorDto, idUser, isCompleted).pipe(
            map((response: ResponseDTO) => {
                if (!response.isSuccess) {
                    this._notificationService.showToastErrorMessage(response.message!);
                }
                return response.data;
            })
        );
    }
} 