import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Planet} from 'src/app/model/Planet';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  planet$!: Observable<Planet>

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    console.log(this.planet$)
  }

}
