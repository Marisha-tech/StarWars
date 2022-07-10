import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Resident} from "../../model/Resident";
import {ResidentService} from "../../services/resident.service";
import {PlanetService} from "../../services/planet.service";

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  private planetParam: any
  public planetInfo: any
  public planetResidents: Resident[] = []
  private planetId?: any
  public residentUrl: string[] = []

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

    this.planetService.getByIdPlanet(this.planetId).subscribe(planet => {
      this.planetInfo = Object.entries(planet)
        .filter(([key]) => key !== 'residents' && key !== 'films')
        .map(([key, value]) => [key.replace('_', ' '), value])

      this.residentUrl = planet.residents
    })
  }
}
