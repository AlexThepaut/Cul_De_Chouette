import { Component, OnInit } from '@angular/core';
import { JoueursService } from '../services/joueurs.service';
import { Joueur } from '../models/joueur';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PATH_GAME } from '../app.routes.constantes';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  isJoueurChoose: boolean = false;

  constructor(public joueurService: JoueursService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.joueurService.joueurs = data['joueurs']);
  }

  joueurChoose(id: number) {
    this.router.navigate([PATH_GAME, id]);
    this.isJoueurChoose = true;
  }

  toCombinaison() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      const player: string = param.get('player');
      this.router.navigate([PATH_GAME]);
    });
  }

  isDisabled(id: number){
    if(this.router.url !== `/${PATH_GAME}`){
      return (this.router.url !== `/${PATH_GAME}/${id}`) ? true : false;
    }
    return false;
  }
}
