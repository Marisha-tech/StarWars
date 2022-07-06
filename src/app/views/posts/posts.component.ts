import {Component, OnDestroy, OnInit,} from '@angular/core';
import {Subscription} from 'rxjs';
import {Planet} from "../../model/Planet";
import {DataHandlerService} from "../../services/data-handler.service";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  planets: Planet[] = []
  postId?: string
  pSub: Subscription | any

  constructor(private dataHandlerService: DataHandlerService) {
  }

  ngOnInit(): void {
    this.pSub = this.dataHandlerService.getAllPosts().subscribe(planets => {
      this.planets = planets
      // console.log(planets)
    })
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
  }

  openPlanet($event: MouseEvent) {

  //  this.planets.find((value) => value.name)
    console.log(MouseEvent)
    console.log(this.planets)
  }
}
