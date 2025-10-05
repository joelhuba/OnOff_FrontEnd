import { Injectable } from "@angular/core";
import { Observable, map, of, switchMap } from "rxjs";
import { HttpService } from "../http-services/http-service.service";

import { Router } from "@angular/router";
import { ResponseDTO } from "../../../core/data-transfer-object/commons/response.dto";
import { ConfigService } from "../common/config/config.service";


@Injectable({
  providedIn: "root",
})
export class AuthService {

  constructor(private _httpService: HttpService,
    private _configService: ConfigService,
    private _router: Router) { }


  login(email: string, password: string): Observable<ResponseDTO> {
    return this._configService.getUrl().pipe(
      switchMap(url => {
        const body = { email, password };
        return this._httpService.post(url, "Login", null, body);
      })
    );
  } 

  isLoggedIn(): Observable<boolean> {
    const authToken = localStorage.getItem("authToken");
    return of(!!authToken);
  }

  logout(): Observable<boolean> {
    localStorage.clear();
    sessionStorage.clear();
    return of(true);
    
  }
}
