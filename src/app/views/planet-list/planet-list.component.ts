import {Component, Injectable, OnDestroy, OnInit,} from '@angular/core';
import {Subscription} from 'rxjs';
import {Planet} from "../../model/Planet";
import {PlanetService} from "../../services/planet.service";
import {MatTableDataSource} from "@angular/material/table";

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit, OnDestroy {

  public displayedColumns: string[] = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity', 'terrain', 'surface_water', 'population', 'created', 'edited', 'action'];
  public dataSource: MatTableDataSource<Planet> = new MatTableDataSource<Planet>()

  public planets: Planet[] = []
  public columnNames?: any

  private pSub: Subscription | any

  constructor(private planetService: PlanetService) {
  }

  ngOnInit(): void {

    this.pSub = this.planetService.getAllPlanets().subscribe(planets => {
      this.planets = planets

      this.dataSource = new MatTableDataSource<Planet>(this.planets)

      // this.columnNames = Object.keys(planets[0])
      //   .filter((el: string) => {
      //     return el !== 'residents' && el !== 'films' && el !== 'url'
      //   })
      //   .map(el => el.split('_').join(' '))

    })
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
  }

}
