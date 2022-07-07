import { Injectable } from '@angular/core';
import {Planet} from "../model/Planet";
import {HttpClient} from "@angular/common/http";
import {PlanetDAOImpl} from "../data/dao/impl/PlanetDAOImpl";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private http: HttpClient,
    private planetDao: PlanetDAOImpl
  ) { }

  getAllPlanets(): Observable<Planet[]> {
    return this.planetDao.getAll()
  }
}
