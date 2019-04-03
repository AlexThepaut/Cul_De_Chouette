import { Component, OnInit } from '@angular/core';
import { JoueursService } from '../services/joueurs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PATH_HOME } from '../app.routes.constantes';

@Component({
  selector: 'app-victoire',
  templateUrl: './victoire.component.html',
  styleUrls: ['./victoire.component.css']
})
export class VictoireComponent implements OnInit {
  texte
  constructor(private joueurService: JoueursService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let joueur = this.joueurService.joueurs[parseInt(this.route.snapshot.paramMap.get('id')) - 1];
    this.texte = `${joueur.nom} à gagné`;
  }
  retour(){
    this.joueurService.delete();
    this.router.navigate([PATH_HOME]);

  }
}
