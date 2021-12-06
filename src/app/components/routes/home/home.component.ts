import { Component, OnInit, HostBinding } from '@angular/core';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @HostBinding('class') classes = 'grid grid-wrap align-items';

  src: string = `assets/images/okai-vehicles-1-unsplash.jpg`;
  alt: string = "Scooter image / Okai"

  constructor() { }

  ngOnInit(): void {
  }

}
