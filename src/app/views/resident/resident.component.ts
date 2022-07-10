import {Component, Input, OnInit} from '@angular/core';
import {Resident} from "../../model/Resident";

@Component({
  selector: 'app-resident',
  templateUrl: './resident.component.html',
  styleUrls: ['./resident.component.scss']
})
export class ResidentComponent implements OnInit {

  @Input()
  planetResidents: any

  constructor() {
  }

  ngOnInit(): void {

    // console.log(this.planetResidents, 'Component resident')

  }

}
