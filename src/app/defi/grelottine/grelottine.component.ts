import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { JoueursService } from 'src/app/services/joueurs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Joueur } from 'src/app/models/joueur';
import { PATH_GAME } from 'src/app/app.routes.constantes';

@Component({
  selector: 'app-grelottine',
  templateUrl: './grelottine.component.html',
  styleUrls: ['./grelottine.component.css']
})
export class GrelottineComponent implements OnInit {

  joueursCanBeSelect: Joueur[];
  joueurSelect: number;
  combiSelect: string;
  minPoints = 0;
  maxPoints: number = 100;
  valeurGrelottine: number;

  combinaison = ["Chouette", "Velute", "Cul de Chouette", "Chouette Velute"];

  constructor(private joueurService: JoueursService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.joueursCanBeSelect = this.joueurThatCanBeSelected();
  }

  joueurThatCanBeSelected(){
    let temp = _.without(this.joueurService.joueurs, (this.joueurService.joueurs[parseInt(this.route.snapshot.paramMap.get('id')) - 1]));
    for (let i = 0; i < temp.length; i++) {
      if(!temp[i].grelottine){
        temp = _.without(temp, (this.joueurService.joueurs[i]));
      }
    }
    return temp;
  }

  getMaxPoints() {
    this.joueursCanBeSelect = this.joueurThatCanBeSelected();
    if (this.joueurSelect && this.combiSelect) {
      let defieur = this.joueurService.joueurs[parseInt(this.route.snapshot.paramMap.get('id')) - 1];
      let defier = this.joueurService.joueurs[this.joueurSelect - 1];
      let pointJoueurFaible = (defieur.points > defier.points) ? defier.points : defieur.points;
      let maxPoints;

      switch (this.combiSelect) {
        case this.combinaison[0]:
          maxPoints = pointJoueurFaible * 0.33;
          break;
        case this.combinaison[1]:
          maxPoints = pointJoueurFaible * 0.25;
          break;
        case this.combinaison[2]:
          maxPoints = pointJoueurFaible * 0.16;
          break;
        case this.combinaison[3]:
          maxPoints = pointJoueurFaible * 0.08;
          break;
      }
      return parseInt(maxPoints);
    }
    return 0;
  }

  defieurGagnant(){
    this.joueurService.updatePointsJoueur(parseInt(this.route.snapshot.paramMap.get('id')), this.valeurGrelottine);
    this.joueurService.updateGrelottine(parseInt(this.route.snapshot.paramMap.get('id')), false);

    this.joueurService.updatePointsJoueur(this.joueurSelect, -this.valeurGrelottine);
    this.joueurService.updateGrelottine(this.joueurSelect, false);

    this.router.navigate([PATH_GAME]);
  }

  defierGagnant(){
    this.joueurService.updatePointsJoueur(parseInt(this.route.snapshot.paramMap.get('id')), -this.valeurGrelottine);
    this.joueurService.updateGrelottine(parseInt(this.route.snapshot.paramMap.get('id')), false);

    this.joueurService.updatePointsJoueur(this.joueurSelect, this.valeurGrelottine);
    this.joueurService.updateGrelottine(this.joueurSelect, false);

    this.router.navigate([PATH_GAME]);
  }
}
