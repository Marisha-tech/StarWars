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

  @Input()
  residentUrl: string[] = []

  @Input()
  planetName: string | undefined

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
  }

  onFilterByGender(value: string) {
    this.planetResidents = this.planetResidentsAll.filter(planet => planet.gender === value || value === null)
  }
}
