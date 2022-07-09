import { Planet } from "src/app/model/Planet";
import {CommonDAO} from "./CommonDAO";
import {Observable} from "rxjs";

export interface PlanetDAO extends CommonDAO<Planet>{

  getByNamePlanet(name: string): Observable<Planet>

  getByIDPlanet(id: string): Observable<Planet>
}
