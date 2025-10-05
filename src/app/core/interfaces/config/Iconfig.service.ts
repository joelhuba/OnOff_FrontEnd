import { Observable } from "rxjs";
import { AppConfig } from "../../data-transfer-object/commons/app-config/app-config.dto";

export interface IConfigService {
  getConfig(): Observable<AppConfig>;
}
