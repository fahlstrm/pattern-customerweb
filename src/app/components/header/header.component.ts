import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Sctr';
  subtitle = 'hrdr fstr sctr';

  constructor() { }

  ngOnInit(): void {
  }

}
