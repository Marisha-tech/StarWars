import {FilmDAO} from "../interface/FilmDAO";
import {Observable} from "rxjs";
import {ResidentFilm} from "../../../model/ResidentFilm";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class FilmDAOImpl implements FilmDAO {

  constructor(private http: HttpClient) {
  }

  getFilmInfo(url: string): Observable<ResidentFilm> {
    return this.http.get<ResidentFilm>(url)
      .pipe(
        map((data: ResidentFilm) => {
          return data
        })
      )
  }

}
