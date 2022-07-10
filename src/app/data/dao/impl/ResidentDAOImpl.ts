import {ResidentDAO} from "../interface/ResidentDAO";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Resident} from "../../../model/Resident";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ResidentDAOImpl implements ResidentDAO {

  constructor(private http: HttpClient) {
  }

  //все планеты
  // getAll(url: string): Observable<Resident[]> {
  //   return this.http.get(`${environment.swapiUrl}/planet-list`)
  //     .pipe(map((data: any) => {
  //       let planetList = data['results']
  //       return planetList
  //     }))
  // }

  // информация о резиденте
  getResident(url: string): Observable<Resident> {
    return this.http.get<Resident>(url)
      .pipe(
        map((data: Resident) => {

          return data
        })
      )
  }


}
