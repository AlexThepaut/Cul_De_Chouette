import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JoueursService } from 'src/app/services/joueurs.service';

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
    this.joueurService.updatePointsJoueur(parseInt(this.route.snapshot.paramMap.get('id')), this.valeurCivet);
    this.joueurService.updateCivet(parseInt(this.route.snapshot.paramMap.get('id')), false);
  }

  perdu(){
    this.joueurService.updatePointsJoueur(parseInt(this.route.snapshot.paramMap.get('id')), -this.valeurCivet);
    this.joueurService.updateCivet(parseInt(this.route.snapshot.paramMap.get('id')), false);
  }
}
