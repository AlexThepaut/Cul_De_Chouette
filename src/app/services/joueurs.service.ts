import { Injectable } from '@angular/core';
import { Joueur } from '../models/joueur';

import { CookieService } from 'ngx-cookie-service';
import { PATH_HOME } from '../app.routes.constantes';
import { Router } from '@angular/router';
import { promise } from 'protractor';

const NOM_COOKIE = 'CDC';

@Injectable({
  providedIn: 'root'
})
export class JoueursService {

  joueurs: Joueur[] = [];

  constructor(private cookieService: CookieService,private router: Router) { }

  createJoueur(newNomJoueur: string): void{
    this.joueurs = [...this.joueurs, new Joueur((this.joueurs.length+1), newNomJoueur, 0, true, false, 0)];
    this.saveInCookie();
  }

  updatePointsJoueur(idJoueur: number, nbrPoints: number,defi:boolean = false): void{
    let joueur = this.joueurs[idJoueur-1]
    if((joueur.points + nbrPoints) > 0){
      if(defi && ((joueur.points + nbrPoints)>332)){
        if(joueur.points<=332){
          joueur.points = 332;
        }
      }else{
        joueur.points += nbrPoints;
      }
    }else{
      joueur.points = 0;
    }
    this.joueurs[idJoueur-1] = joueur;
      this.saveInCookie();
  }

  updateGrelottine(idJoueur: number, grelotinne: boolean){
    this.joueurs[idJoueur-1].grelottine = grelotinne;
    this.saveInCookie();
  }

  updateCivet(idJoueur: number, value: boolean){
   if(value){
        this.joueurs[idJoueur-1].civet ++;
      }else if(this.joueurs[idJoueur-1].civet > 0){
       if(!value){
        this.joueurs[idJoueur-1].civet --;
      }
    }
    this.saveInCookie();
  }

  setBoucliette(idJoueur: number){
    this.joueurs[idJoueur-1].boucliette = false;
    this.saveInCookie();
  }

  saveInCookie(){
    if(this.cookieService.check(NOM_COOKIE)){
      this.cookieService.delete(NOM_COOKIE);
    }
    this.cookieService.set(NOM_COOKIE, JSON.stringify(this.joueurs));
  }
  finDePartie(joueur:Joueur){
    this.router.navigate([joueur.id]);
  }
  delete(){
    this.cookieService.delete(NOM_COOKIE);
  }
}
