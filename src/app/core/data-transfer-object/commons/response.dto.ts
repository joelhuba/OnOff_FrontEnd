export interface ResponseDTO<T = any> {
  isSuccess: boolean;
  message: string;
  data?: any | null;
}