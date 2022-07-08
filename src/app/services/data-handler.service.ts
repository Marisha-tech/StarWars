import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PlanetDAOImpl} from "../data/dao/impl/PlanetDAOImpl";

import {Planet} from "../model/Planet";
import {HttpClient} from "@angular/common/http";
import {Resident} from "../model/Resident";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor(
    private http: HttpClient,
    private planetDao: PlanetDAOImpl
  ) {}

  getAllPlanets(): Observable<Planet[]> {
    return this.planetDao.getAll()
  }

  // getByUrl(url: string): Observable<Planet> {
  //   return this.planetDao.getByUrl(url)
  // }

  getByName(name: string): Observable<Planet> {
    return this.planetDao.getByName(name)
  }

  getByResident(url: string): Observable<Resident> {
    return this.planetDao.getResident(url)
  }


  // getById(id: string): Observable<Planet> {
  //   return this.postDaoArray.getById()
  // }

}
