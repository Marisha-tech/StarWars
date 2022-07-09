import {Component, EventEmitter, Injectable, Input, OnDestroy, OnInit, Output,} from '@angular/core';
import {Subscription} from 'rxjs';
import {Planet} from "../../model/Planet";
import {DataHandlerService} from "../../services/data-handler.service";
import {MatTableDataSource} from "@angular/material/table";

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit, OnDestroy {

  public displayedColumns: string[] = ['Rotation period'];
  public dataSource: MatTableDataSource<Planet> = new MatTableDataSource<Planet>()// контейнер - источник данных для таблицы displayedColumns

  planets: Planet[] = []
  planet?: any
  columnNames?: any
  planetProp?: any
  planetUrl?: any

  data: any

  pSub: Subscription | any

  constructor(
    private dataHandlerService: DataHandlerService,) {
  }

  ngOnInit(): void {

    this.pSub = this.dataHandlerService.getAllPlanets().subscribe(planets => {
      this.planets = planets

      // наименование колонок, кроме residents И films
      this.columnNames = Object.keys(planets[0])
        .filter((el: string) => {
          return el !== 'residents' && el !== 'films'
        })
        .map(el => el.split('_').join(' '))

      //не надо
      this.planetUrl = planets
        .map(el => el.url.split('/'))

      // console.log(this.planetUrl)

      // console.log(this.planetUrl, 'ВСЕ ПЛАНЕТЫ')

    })

  }

  // getByUrl(planet: string) {
  //   this.planetUrl = this.dataHandlerService.getByUrl(planet).subscribe(planet => {
  //     this.planet = planet
  //     // console.log(planet, '1111111111')
  //   })
  //
  // }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
  }


}
