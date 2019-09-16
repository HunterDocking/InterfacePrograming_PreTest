import { Component, OnInit } from '@angular/core';

import { Movie } from '../movie';
import { MOVIES } from '../movie-list';

@Component({
  selector: 'app-movie-info-component',
  templateUrl: './movie-info-component.component.html',
  styleUrls: ['./movie-info-component.component.css']
})
export class MovieInfoComponentComponent implements OnInit {


  movie = new Movie 
  movies = MOVIES;

  constructor() { }

  ngOnInit() {
  }

}