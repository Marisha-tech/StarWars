import {Component, Input, OnChanges} from '@angular/core';
import {ResidentFilm} from "../../model/ResidentFilm";
import {FilmService} from "../../services/film.service";

@Component({
  selector: 'app-resident-film',
  templateUrl: './resident-film.component.html',
  styleUrls: ['./resident-film.component.scss']
})
export class ResidentFilmComponent implements OnChanges {

  @Input()
  residentFilm?: string[]

  films: ResidentFilm[] = []

  constructor(
    private filmService: FilmService
  ) {
  }

  ngOnChanges(): void {

    for (const filmUrl of this.residentFilm!) {
      this.filmService.getFilmInfo(filmUrl).subscribe(film => {
        this.films.push(film)
      })
    }
  }
}
