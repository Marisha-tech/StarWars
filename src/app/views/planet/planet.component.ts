import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ResidentService} from "../../services/resident.service";
import {PlanetService} from "../../services/planet.service";
import {MatTableDataSource} from "@angular/material/table";
import {Planet} from "../../model/Planet";
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  public dataSource: MatTableDataSource<Planet> = new MatTableDataSource<Planet>()

  private planetParam?: Subscription
  public planetInfo: any
  private planetId?: string
  public residentUrl: string[] = []
  public planetName?: string

  constructor(
    private route: ActivatedRoute,
    private residentService: ResidentService,
    private planetService: PlanetService
  ) {
  }

  ngOnInit() {

    this.planetParam = this.route.params.subscribe((params: Params) => {
      this.planetId = params['name']
    })

    this.planetService.getByIdPlanet(this.planetId!).subscribe(planet => {
      this.planetInfo = Object.entries(planet)
        .filter(([key]) => key !== 'residents' && key !== 'films')
        .map(([key, value]) => [key.replace('_', ' '), value])

      this.residentUrl = planet.residents
      this.planetName = planet.name

      this.dataSource = new MatTableDataSource<Planet>(this.planetInfo)

    })
  }
}
