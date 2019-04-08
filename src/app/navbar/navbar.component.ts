import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { PATH_GAME } from '../app.routes.constantes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isHidden: boolean;

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
    this.isHidden = this.hadToBeHidden();
  }

  toPrevious(){
    this.location.back();
  }

  hadToBeHidden(){
    return (this.router.url === `/${PATH_GAME}`) ? true : false;
  }
}
