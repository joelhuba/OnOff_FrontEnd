export interface TaskDTO {
  idTask: number;
  title: string;
  description?: string;
  isCompleted: boolean;
  createdAt: string;      // ISO string
  completedAt?: string | null;
  idUser: number;
  user?: string | null;  // opcional, puede ser null
}

export interface CreateTaskDTO {
  title: string;
  description?: string | null;
  idUser: number;
}


export interface UpdateTaskDTO {
  idTask: number;
  title: string;
  description?: string | null;
  isCompleted: boolean;
}