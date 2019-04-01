import { Component, OnInit } from '@angular/core';
import { JoueursService } from '../services/joueurs.service';
import { Joueur } from '../models/joueur';
import { Router } from '@angular/router';
import { PATH_GAME } from '../app.routes.constantes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nameTemp: string;
  isDone: boolean;

  constructor(private joueurService: JoueursService, private router: Router) { }

  ngOnInit() {
  }

  nameChange(value){
    this.nameTemp = value.target.value;
  }

  addJoueur(){
    this.joueurService.createJoueur(this.nameTemp);
    this.nameTemp = '';
  }

  toGamePage(){
    this.router.navigate([PATH_GAME]);
  }
}
