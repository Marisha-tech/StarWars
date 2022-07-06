import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PostDAOArray} from "../data/dao/impl/postDAOArray";

import {Post} from "../model/Post";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor(
    private http: HttpClient,
    private postDaoArray: PostDAOArray
  ) {}

  getAllPosts(): Observable<Post[]> {
    return this.postDaoArray.getAll()
  }

  // getById(id: string): Observable<Post> {
  //   return this.postDaoArray.getById()
  // }

}
