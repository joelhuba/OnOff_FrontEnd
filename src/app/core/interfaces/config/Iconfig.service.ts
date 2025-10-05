import { Observable } from "rxjs";
import { AppConfig } from "../../data-transfer-object/app-config/app-config.dto";

export interface IConfigService {
  getConfig(): Observable<AppConfig>;
}
