import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JoueursService } from 'src/app/services/joueurs.service';
import { PATH_GAME } from 'src/app/app.routes.constantes';

@Component({
  selector: 'app-cul-de-chouette',
  templateUrl: './cul-de-chouette.component.html',
  styleUrls: ['./cul-de-chouette.component.css']
})
export class CulDeChouetteComponent implements OnInit {

  choix: Number[] = [1, 2, 3, 4, 5, 6];
  joueursId: Number[] = [];
  combinaison: Number = 0;

  constructor(private router: Router, private joueursService: JoueursService, private route: ActivatedRoute) {
  }
  addPointsCulDeChouette(){
    if (this.combinaison!=0){
      let score = parseInt(this.combinaison.toString()) * 10+40 ;
      this.joueursService.updatePointsJoueur(parseInt(this.route.snapshot.paramMap.get('id')), score)
    }
  }
  stockNumber(number) {
    this.combinaison = number;
  }
  ngOnInit() {
  }

}
