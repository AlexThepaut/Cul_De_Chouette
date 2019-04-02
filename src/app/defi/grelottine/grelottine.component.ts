import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { JoueursService } from 'src/app/services/joueurs.service';
import { ActivatedRoute } from '@angular/router';
import { Joueur } from 'src/app/models/joueur';

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

  constructor(private joueurService: JoueursService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.joueursCanBeSelect = _.without(this.joueurService.joueurs, (this.joueurService.joueurs[parseInt(this.route.snapshot.paramMap.get('id')) - 1]));
  }

  getMaxPoints() {
    this.joueursCanBeSelect = _.without(this.joueurService.joueurs, (this.joueurService.joueurs[parseInt(this.route.snapshot.paramMap.get('id')) - 1]));
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
      return maxPoints;
    }
    return 0;
  }

  defieurGagnant(){
    this.joueurService.updatePointsJoueur(parseInt(this.route.snapshot.paramMap.get('id')), this.valeurGrelottine);
    this.joueurService.updateGrelottine(parseInt(this.route.snapshot.paramMap.get('id')), false);

    this.joueurService.updatePointsJoueur(this.joueurSelect, -this.valeurGrelottine);
    this.joueurService.updateGrelottine(this.joueurSelect, false);
  }

  defierGagnant(){
    this.joueurService.updatePointsJoueur(parseInt(this.route.snapshot.paramMap.get('id')), -this.valeurGrelottine);
    this.joueurService.updateGrelottine(parseInt(this.route.snapshot.paramMap.get('id')), false);

    this.joueurService.updatePointsJoueur(this.joueurSelect, this.valeurGrelottine);
    this.joueurService.updateGrelottine(this.joueurSelect, false);
  }
}
