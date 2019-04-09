import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { PATH_GAME, PATH_HOME } from '../app.routes.constantes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isArrowHidden: boolean;
  isMenuHidden: boolean;

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
    this.isArrowHidden = this.hadToBeHidden();
  }

  toPrevious(){
    if(this.router.url !== `/${PATH_GAME}`){
      this.router.navigate([PATH_GAME]);
    }else{
      this.router.navigate([PATH_HOME]);
    }
  }

  hadToBeHidden(){
    return (this.router.url !== `/`) ? true : false;
  }

  toggleMenu(){
    this.isMenuHidden = !this.isMenuHidden;
  }
}
