import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { AuthService } from "../../service/auth/auth.service";
import { ResponseDTO } from "../../../core/data-transfer-object/commons/response.dto";


@Injectable({
  providedIn: "root",
})
export class AuthUseCase {

  constructor(private _auth: AuthService) {}

  login(userName: string, password: string): Observable<boolean> {
    return this._auth.login(userName, password).pipe(
      switchMap((response: ResponseDTO) => {
        if (response.isSuccess) {
          const authToken = response.data;
          localStorage.setItem("authToken", authToken);
          return of(true);
        } else {
          return of(false);
        }
      })
    );
  }

  isLoggedIn(): Observable<boolean> {
    const authToken = localStorage.getItem("authToken");
    return of(!!authToken);
  }

  logout(): Observable<boolean> {
    localStorage.removeItem("authToken");
    localStorage.clear();
    sessionStorage.clear();
    return of(true);
  }
}
