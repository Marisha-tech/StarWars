import {PlanetDAO} from "../interface/PlanetDAO";
import {Planet} from "../../../model/Planet";

import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

import {map, tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PlanetDAOImpl implements PlanetDAO {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Planet[]> {
    return this.http.get(`${environment.swapiUrl}/planets`)
      .pipe(map((data: any) => {
        let planetList = data['results']

        return planetList
      }))
  }


  findByName(name: string) {

  }

  getById(id: number): Observable<Planet> {
    return this.http.get<Planet>(`${environment.swapiUrl}/planets/${id}`)
      .pipe(
        map((post: Planet) => {
          console.log(post, 'PlanetDAOImpl')
          return {
            ...post
          }
        })
      )
  }

  // add(T): <Planet>{
  //   return undefined;
  // }
  //
  // delete(id: number): <Planet>{
  //   return undefined;
  // }

//   getAll(): <Planet[]> {
//
// }


// update(T): <Planet>{
//   return undefined;
// }

}
