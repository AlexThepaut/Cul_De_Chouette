import { Component, OnInit } from '@angular/core';
import { JoueursService } from '../services/joueurs.service';
import { Router } from '@angular/router';
import { PATH_RULES, PATH_HOME, PATH_TUTO } from '../app.routes.constantes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private joueursService: JoueursService, private router: Router) { }

  ngOnInit() {
  }

  toTutorial() {
    this.router.navigate([PATH_TUTO]);
  }

  toRules() {
    this.router.navigate([PATH_RULES]);
  }

  newGame() {
    this.joueursService.delete();
    this.joueursService.joueurs = [];
    this.router.navigate([PATH_HOME]);
  }

  isNewGame(){
    return this.router.url === `/${PATH_HOME}` ? false : true;
  }
}
