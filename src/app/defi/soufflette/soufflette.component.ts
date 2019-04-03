import { Component, OnInit } from '@angular/core';
import { JoueursService } from 'src/app/services/joueurs.service';
import { ActivatedRoute, Router } from '@angular/router';
import _ from 'lodash';
import { Joueur } from 'src/app/models/joueur';
import { PATH_GAME } from 'src/app/app.routes.constantes';

@Component({
  selector: 'app-soufflette',
  templateUrl: './soufflette.component.html',
  styleUrls: ['./soufflette.component.css']
})
export class SouffletteComponent implements OnInit {

  joueursCanBeSelect: Joueur[];
  optionSelect: string;
  joueurSelect: string;

  constructor(private joueurService: JoueursService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.joueursCanBeSelect = this.joueurThatCanBeSelected();
  }

  joueurThatCanBeSelected() {
    return _.without(this.joueurService.joueurs, (this.joueurService.joueurs[parseInt(this.route.snapshot.paramMap.get('id')) - 1]));
  }

  ajoutDesPoints() {
    switch (this.optionSelect) {
      case '0':
        this.joueurService.updatePointsJoueur(parseInt(this.route.snapshot.paramMap.get('id')), 30,true);
        this.joueurService.updatePointsJoueur(parseInt(this.joueurSelect), -30);
        break;
      case '1':
        this.joueurService.updatePointsJoueur(parseInt(this.route.snapshot.paramMap.get('id')), -30);
        this.joueurService.updatePointsJoueur(parseInt(this.joueurSelect), 50,true);
        break;
      case '2':
        this.joueurService.updatePointsJoueur(parseInt(this.route.snapshot.paramMap.get('id')), -30);
        this.joueurService.updatePointsJoueur(parseInt(this.joueurSelect), 40,true);
        break;
      case '3':
        this.joueurService.updatePointsJoueur(parseInt(this.route.snapshot.paramMap.get('id')), -30);
        this.joueurService.updatePointsJoueur(parseInt(this.joueurSelect), 30,true);
        break;
    }
    this.router.navigate([PATH_GAME]);
  }
}
