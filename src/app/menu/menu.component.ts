import { Component, OnInit } from '@angular/core';
import { JoueursService } from '../services/joueurs.service';
import { Router } from '@angular/router';
import { PATH_RULES } from '../app.routes.constantes';

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
    // TODO
  }

  toRules() {
    this.router.navigate([PATH_RULES]);
  }

  newGame() {
    // TODO
  }
}
