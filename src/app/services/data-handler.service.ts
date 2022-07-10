import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PlanetDAOImpl} from "../data/dao/impl/PlanetDAOImpl";
import {Planet} from "../model/Planet";
import {Resident} from "../model/Resident";
import {ResidentDAOImpl} from "../data/dao/impl/ResidentDAOImpl";

@Injectable({
  providedIn: 'root'
})

export class DataHandlerService {

  constructor(
    // private http: HttpClient,
    private planetDao: PlanetDAOImpl,
    private residentDao: ResidentDAOImpl
  ) {
  }

  getAllPlanets(): Observable<Planet[]> {
    return this.planetDao.getAllPlanets()
  }


  getByNamePlanet(name: string): Observable<Planet> {
    return this.planetDao.getByNamePlanet(name)
  }

  getByIdPlanet(id: string): Observable<Planet> {
    return this.planetDao.getByIDPlanet(id)
  }


  getByResident(url: string): Observable<Resident> {
    return this.residentDao.getResident(url)
  }

}
