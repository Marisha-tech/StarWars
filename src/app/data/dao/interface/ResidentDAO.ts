import {Resident} from "../../../model/Resident";
import {Observable} from "rxjs";

export interface ResidentDAO {

  getResident(url: string): Observable<Resident>

}
