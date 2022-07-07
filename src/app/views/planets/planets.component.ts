import {Component, OnDestroy, OnInit,} from '@angular/core';
import {Subscription} from 'rxjs';
import {Planet} from "../../model/Planet";
import {DataHandlerService} from "../../services/data-handler.service";
import {map} from "rxjs/operators";


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit, OnDestroy {
  planets: Planet[] = []
  columnNames?: any
  planetProp?: any
  planetUrl?: any
  pSub: Subscription | any

  constructor(private dataHandlerService: DataHandlerService) {
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


      this.planetUrl = planets
        .map(el => el.url.split('/'))
      // .forEach(item => console.log(item[5]))

      let objList = this.planets.map((el, index) => console.log(el.url.split('/')))



      // for (const item in this.planetUrl) {
      //   this.planets.push(this.planetUrl[item][5])
      // }
      // console.log(this.planets)

      // console.log([...this.planetId].map((el,idx) => (idx === [...this.planetId].length-1) ? `${el}` : `${el}`))

    })
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
  }

}
