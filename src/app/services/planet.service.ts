import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PlanetDAOImpl} from "../data/dao/impl/PlanetDAOImpl";
import {Planet} from "../model/Planet";

@Injectable({
  providedIn: 'root'
})

export class PlanetService {

  constructor(private planetDao: PlanetDAOImpl) {
  }

  getAllPlanets(): Observable<Planet[]> {
    return this.planetDao.getAllPlanets()
  }

  getByIdPlanet(id: string): Observable<Planet> {
    return this.planetDao.getByIDPlanet(id)
  }
}
