import {Planet} from "src/app/model/Planet";
import {Observable} from "rxjs";

export interface PlanetDAO {

  getAllPlanets(): Observable<Planet[]>

  getByIDPlanet(id: string): Observable<Planet>
}
