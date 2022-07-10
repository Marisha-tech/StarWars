import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {DataHandlerService} from "../../services/data-handler.service";
import {Resident} from "../../model/Resident";

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
  private planet: any
  private residentUrl: any

  constructor(
    private route: ActivatedRoute,
    private dataHandlerService: DataHandlerService,
  ) {
  }

  ngOnInit(): void {

    // передано наименование планеты в адресную строку
    this.planetParam = this.route.params.subscribe((params: Params) => {
      this.planetId = params['name']
    })

    this.dataHandlerService.getByIdPlanet(this.planetId).subscribe(planet => {

      this.planetInfo = Object.entries(planet)
        .filter(([key]) => key !== 'residents' && key !== 'films')
        .map(([key, value]) => [key.replace('_', ' '), value])

      for (const residentUrl of planet.residents) {
        this.residentUrl = residentUrl
        this.dataHandlerService.getByResident(this.residentUrl).subscribe(resident => {
          this.planetResidents.push(resident)

        })//////// getByResident
      }
    }) //////// getByIdPlanet
    // console.log(this.planetResidents, 'Planet component');
    console.log(this.planetResidents)
  }

}
