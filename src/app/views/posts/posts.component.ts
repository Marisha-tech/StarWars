import {Component, OnDestroy, OnInit,} from '@angular/core';
import {Subscription} from 'rxjs';
import {Post} from "../../model/Post";
import {DataHandlerService} from "../../services/data-handler.service";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  posts: Post[] = []
  postId?: string
  pSub: Subscription | any

  constructor(private dataHandlerService: DataHandlerService) {
  }

  ngOnInit(): void {
    this.pSub = this.dataHandlerService.getAllPosts().subscribe(posts => {
      this.posts = posts
      console.log(posts)
    })
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }
  }

}
