import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Observable} from "rxjs";
import {Planet} from 'src/app/model/Planet';
import {DataHandlerService} from "../../services/data-handler.service";
import {PlanetsComponent} from "../planets/planets.component";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  planetList?: any
  planetName: any
  planetInfo: any
  planetResidents?: any
  planetId?: any
  url?: any
  data?: any

  test: any

  constructor(
    private route: ActivatedRoute,
    private dataHandlerService: DataHandlerService,
    // private planets: PlanetsComponent,
  ) {
  }

  ngOnInit(): void {

    // передано наименование планеты в адресную строку
    this.test = this.route.params.subscribe((params: Params) => {
      this.planetName = params
      this.planetId = params['name']

      this.dataHandlerService.getByIdPlanet(this.planetId).subscribe(planet => {
        console.log(planet)
      })

    })



    // this.dataHandlerService.getByNamePlanet(this.planetList).subscribe(planet => {
    //
    //   this.planetList = planet
    //
    //   for (let i = 0; i < this.planetList.length; i++) {
    //     if (this.planetList[i].name === this.planetName.name) {
    //       this.planetInfo = this.planetList[i]
    //     }
    //   }
    //   this.planetResidents = this.planetInfo.residents
    // })

    // this.dataHandlerService.getByUrl(this.url).subscribe(planets => {
    //   this.planet = planets
    //   console.log(this.planet)
    // })

  }

}
