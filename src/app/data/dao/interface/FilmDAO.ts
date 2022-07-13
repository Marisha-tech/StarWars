import {Observable} from "rxjs";
import {ResidentFilm} from "../../../model/ResidentFilm";

export interface FilmDAO {
  getFilmInfo(url: string): Observable<ResidentFilm>
}
