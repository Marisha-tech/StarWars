import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Post} from 'src/app/model/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post$!: Observable<Post>

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    console.log(this.post$)
  }

}
