import {Injectable} from '@angular/core';
import {ResidentDAOImpl} from "../data/dao/impl/ResidentDAOImpl";
import {Resident} from "../model/Resident";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  constructor(private residentDao: ResidentDAOImpl) {
  }

  getByResident(url: string): Observable<Resident> {
    return this.residentDao.getResident(url)
  }

}
