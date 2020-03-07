import { Injectable } from '@angular/core';
import { Joueur } from '../models/joueur';

import { CookieService } from 'ngx-cookie-service';
import { PATH_HOME, PATH_GAME } from '../app.routes.constantes';
import { Router } from '@angular/router';

const NOM_COOKIE = 'CDC';

@Injectable({
  providedIn: 'root'
})
export class JoueursService {

  joueurs: Joueur[] = [];

  constructor(private cookieService: CookieService, private router: Router) { }

  createJoueur(newNomJoueur: string): void {
    this.joueurs.push(new Joueur((this.joueurs.length + 1), newNomJoueur, 0, true, false, 0));
    this.saveInCookie();
  }

  updatePointsJoueur(idJoueur: number, nbrPoints: number, defi: boolean = false,sirot: boolean = false): void {
    let joueur = this.joueurs[idJoueur - 1]
    if ((joueur.points + nbrPoints) > 0) {
      if (defi && ((joueur.points + nbrPoints) > 332)) {
        if (joueur.points <= 332) {
          joueur.points = 332;
        }
      } else {
        joueur.points += nbrPoints;
      }
    } else {
      joueur.points = 0;
    }
    this.joueurs[idJoueur - 1] = joueur;
    this.saveInCookie();
    if(!sirot && !defi){
      this.finDePartieOuRetourAuJeu(idJoueur);
    }
  }

  updateGrelottine(idJoueur: number, grelotinne: boolean) {
    this.joueurs[idJoueur - 1].grelottine = grelotinne;

    this.saveInCookie();
  }

  updateCivet(idJoueur: number, value: boolean) {
    if (value) {
      this.joueurs[idJoueur - 1].civet++;
    } else if (this.joueurs[idJoueur - 1].civet > 0) {
      if (!value) {
        this.joueurs[idJoueur - 1].civet--;
      }
    }
    this.saveInCookie();
  }

  setBoucliette(idJoueur: number) {
    this.joueurs[idJoueur - 1].boucliette = false;
    this.saveInCookie();
  }

  saveInCookie() {
    if (this.cookieService.check(NOM_COOKIE)) {
      this.cookieService.delete(NOM_COOKIE);
    }
    this.cookieService.set(NOM_COOKIE, JSON.stringify(this.joueurs));
  }

  finDePartieOuRetourAuJeu(idJoueur: number) {
    if(this.joueurs[idJoueur-1].points >= 343){
      this.router.navigate([idJoueur]);
    }else{
      this.router.navigate([PATH_GAME]);
    }
  }

  delete() {
    this.joueurs = [];
    this.cookieService.delete(NOM_COOKIE);
  }
}
