import {PlanetDAO} from "../interface/PlanetDAO";
import {Planet} from "../../../model/Planet";

import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Resident} from "../../../model/Resident";

@Injectable({
  providedIn: 'root'
})
export class PlanetDAOImpl implements PlanetDAO {

  constructor(private http: HttpClient) {
  }

  //все планеты
  getAllPlanets(): Observable<Planet[]> {
    return this.http.get(`${environment.swapiUrl}/planets`)
      .pipe(map((data: any) => {
        let planetList = data['results']
        return planetList
      }))
  }

  // информация о планете по id
  getByIDPlanet(id: string): Observable<Planet> {
    return this.http.get<Planet>(`${environment.swapiUrl}/planets/${id}`)
      .pipe(map((data: any) => {
        return data
      }))
  }

// информация о планете по name
//   getByNamePlanet(name: string): Observable<Planet> {
//     return this.http.get<Planet>(`${environment.swapiUrl}/planets`)
//       .pipe(map((data: any) => {
//         let planetList = data['results']
//         // console.log(planetList)
//         return planetList
//       }))
//   }


  /*getById(id: number): Observable<Planet> {
    return this.http.get<Planet>(`${environment.swapiUrl}/planet-list/${id}`)
      .pipe(
        map((post: Planet) => {
          console.log(post, 'PlanetDAOImpl')
          return {
            ...post
          }
        })
      )
  }*/

  // getByUrl(url: string): Observable<Planet> {
  //   return this.http.get<Planet>(url)
  //     .pipe(
  //       map((planet: Planet) => {
  //         return {
  //           ...planet,
  //           // url
  //         }
  //       })
  //     )
  // }

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
