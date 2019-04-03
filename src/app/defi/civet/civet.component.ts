import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JoueursService } from 'src/app/services/joueurs.service';
import { PATH_GAME } from 'src/app/app.routes.constantes';

@Component({
  selector: 'app-civet',
  templateUrl: './civet.component.html',
  styleUrls: ['./civet.component.css']
})
export class CivetComponent implements OnInit {

  valeurCivet: number;

  constructor(private route: ActivatedRoute, private router: Router, private joueurService: JoueursService) { }

  ngOnInit() {
  }

  gagne(){
    this.joueurService.updatePointsJoueur(parseInt(this.route.snapshot.paramMap.get('id')), this.valeurCivet,true);
    this.joueurService.updateCivet(parseInt(this.route.snapshot.paramMap.get('id')), false);
    this.router.navigate([PATH_GAME]);

  }

  perdu(){
    this.joueurService.updatePointsJoueur(parseInt(this.route.snapshot.paramMap.get('id')), -this.valeurCivet);
    this.joueurService.updateCivet(parseInt(this.route.snapshot.paramMap.get('id')), false);
    this.router.navigate([PATH_GAME]);
  }
}
