import { Component, OnInit } from '@angular/core';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  host: {
    class: `grid grid-wrap`
  }, //Added to set grid for the router-outlet components
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  src: string = `assets/images/okai-vehicles-1-unsplash.jpg`;
  alt: string = "Scooter image / Okai"

  constructor() { }

  ngOnInit(): void {
  }

}
