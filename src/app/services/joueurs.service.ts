import { Injectable } from '@angular/core';
import { Joueur } from '../models/joueur';

@Injectable({
  providedIn: 'root'
})
export class JoueursService {

  joueurs: Joueur[] = [];

  constructor() { }

  createJoueur(newNomJoueur: string): void{
    this.joueurs = [...this.joueurs, new Joueur((this.joueurs.length+1), newNomJoueur, 0, true, false, 0)];
  }

  updatePointsJoueur(idJoueur: number, nbrPoints: number): void{
    let joueur = this.joueurs[idJoueur-1]
    if((joueur.points + nbrPoints) > 0){
      joueur.points += nbrPoints;
    }else{
      joueur.points = 0;
    }
    this.joueurs[idJoueur-1] = joueur;
  }

  updateGrelottine(idJoueur: number, grelotinne: boolean){
    this.joueurs[idJoueur-1].grelottine = grelotinne;
  }

  updateCivet(idJoueur: number, value: boolean){
    if(this.joueurs[idJoueur-1].civet > 0){
      if(value){
        this.joueurs[idJoueur-1].civet ++;
      }else if(!value){
        this.joueurs[idJoueur-1].civet --;
      }
    }
  }

  setBoucliette(idJoueur: number){
    this.joueurs[idJoueur-1].boucliette = false;
  }
}
