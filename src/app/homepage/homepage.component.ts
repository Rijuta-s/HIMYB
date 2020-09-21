import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styles: [`
  .hero {
    background-image: url('/assets/us1.jpeg') !important ;
    background-size: contain ;
    background-position: center center ;   
 }
  `]
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
