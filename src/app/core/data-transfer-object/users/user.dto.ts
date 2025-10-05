export interface UserDTO {
  idUser: number;
  email: string;
  password: string;
  passwordSalt: string;
  firstName: string;
  lastName: string;
  rol: string;
}
export interface CreateUserDTO {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  rol: string;
}

// UpdateUserDTO.ts
export interface UpdateUserDTO {
  idUser: number;
  email: string;       // opcional en actualización // opcional en actualización
  firstName: string;   // opcional en actualización
  lastName: string;    // opcional en actualización
  rol: string;         // opcional en actualización
}