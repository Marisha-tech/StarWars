import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {FilmDAOImpl} from "../data/dao/impl/FilmDAOImpl";
import {ResidentFilm} from "../model/ResidentFilm";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private filmDao: FilmDAOImpl) {
  }

  getFilmInfo(url: string): Observable<ResidentFilm> {
    return this.filmDao.getFilmInfo(url)
  }
}
