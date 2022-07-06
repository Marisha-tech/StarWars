import {PostDAO} from "../interface/postDAO";
import {Post} from "../../../model/Post";

import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

import {map, tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PostDAOArray implements PostDAO {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Post[]> {
    return this.http.get(`${environment.swapiUrl}/planets`)
      .pipe(map((data: any) => {
        let planetList = data['results']
        return planetList
      }))
  }

  getById(id: number): Observable<Post> {
    return this.http.get<Post>(`${environment.swapiUrl}/planets/${id}`)
      .pipe(
        map((post: Post) => {
          console.log(post)
          return {
            ...post
          }
        })
      )
  }

  // add(T): <Post>{
  //   return undefined;
  // }
  //
  // delete(id: number): <Post>{
  //   return undefined;
  // }

//   getAll(): <Post[]> {
//
// }


// update(T): <Post>{
//   return undefined;
// }

}
