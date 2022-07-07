import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Observable} from "rxjs";
import {Planet} from 'src/app/model/Planet';
import {DataHandlerService} from "../../services/data-handler.service";
import {PlanetsComponent} from "../planets/planets.component";

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  planet$!: Observable<Planet>

  @Input()
  planetUrl: any


  constructor(
    private route: ActivatedRoute,
    private dataHandlerService: DataHandlerService,
    private planets: PlanetsComponent,
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params)
    })
    // console.log(this.planet$)

    this.dataHandlerService.getByUrl('')

    // console.log(this.planet$)
    console.log(this.planets)
  }

}
