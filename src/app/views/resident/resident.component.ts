import {Component, Injectable, Input, OnChanges} from '@angular/core';
import {ResidentService} from "../../services/resident.service";
import {Resident} from "../../model/Resident";

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-resident',
  templateUrl: './resident.component.html',
  styleUrls: ['./resident.component.scss']
})
export class ResidentComponent implements OnChanges {

  public planetResidents: Resident[] = []
  public planetResidentsAll: Resident[] = []
  public image: any

  @Input()
  residentUrl: string[] = []

  private male: any;
  private female: any

  public selectedGenderFilter!: string;

  constructor(private residentService: ResidentService) {
  }

  ngOnChanges() {

    for (const residentUrl of this.residentUrl) {
      this.residentService.getByResident(residentUrl).subscribe(resident => {
        this.planetResidents.push(resident)
        this.planetResidentsAll.push(resident)
      })
    }
    const random = Math.floor(Math.random() * (1 - 10)) + 10;
    this.image = `https://picsum.photos/id/${random}/300/300`;
  }



  onFilterByGender(value: string) {
    this.planetResidents = this.planetResidentsAll.filter(planet => planet.gender === value || value === null)
  }
}
