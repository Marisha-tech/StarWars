import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PlanetDAOImpl} from "../data/dao/impl/PlanetDAOImpl";

import {Planet} from "../model/Planet";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor(
    private http: HttpClient,
    private planetDao: PlanetDAOImpl
  ) {}

  getAllPosts(): Observable<Planet[]> {
    return this.planetDao.getAll()
  }

  // getById(id: string): Observable<Planet> {
  //   return this.postDaoArray.getById()
  // }

}
