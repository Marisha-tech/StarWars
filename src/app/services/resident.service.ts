import {Injectable} from '@angular/core';
import {ResidentDAOImpl} from "../data/dao/impl/ResidentDAOImpl";
import {Resident} from "../model/Resident";
import {Observable} from "rxjs";
import {ResidentFilm} from "../model/ResidentFilm";
import {FilmDAOImpl} from "../data/dao/impl/FilmDAOImpl";

@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  constructor(
    private residentDao: ResidentDAOImpl,
    private filmDao: FilmDAOImpl
  ) {
  }

  getByResident(url: string): Observable<Resident> {
    return this.residentDao.getResident(url)
  }

  getFilmInfo(url: string): Observable<ResidentFilm> {
    return this.filmDao.getFilmInfo(url)
  }

}
