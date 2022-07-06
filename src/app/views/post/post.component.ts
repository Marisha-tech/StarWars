import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Planet} from 'src/app/model/Planet';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post$!: Observable<Planet>

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    console.log(this.post$)
  }

}
