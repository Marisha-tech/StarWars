import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../services/shared.service";
import {DataHandlerService} from "../../services/data-handler.service";
import {Planet} from "../../model/Planet";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  planets: Planet[] = []
  planetUrl?: any

  constructor(
    private shared: SharedService,
    private dataHandlerService: DataHandlerService) {
  }

  ngOnInit(): void {
    this.dataHandlerService.getAllPlanets().subscribe(planets => {
      this.planets = planets

      this.planetUrl = planets
        .map(el => el.url.split('/'))
    })
  }

}
