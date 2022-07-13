import {ResidentDAO} from "../interface/ResidentDAO";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Resident} from "../../../model/Resident";
import {Injectable} from "@angular/core";
import {ResidentFilm} from "../../../model/ResidentFilm";

@Injectable({
  providedIn: 'root'
})
export class ResidentDAOImpl implements ResidentDAO {

  constructor(private http: HttpClient) {
  }

  // информация о резиденте
  getResident(url: string): Observable<Resident> {
    return this.http.get<Resident>(url)
      .pipe(
        map((data: Resident) => {

          return data
        })
      )
  }

  getFilms(url: string): Observable<ResidentFilm> {
    return this.http.get<ResidentFilm>(url)
      .pipe(
        map((data: ResidentFilm) => {
          return data
        })
      )
  }


}
