import { Component, OnInit } from '@angular/core';
import { JoueursService } from 'src/app/services/joueurs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PATH_GAME } from 'src/app/app.routes.constantes';

@Component({
  selector: 'app-chouette',
  templateUrl: './chouette.component.html',
  styleUrls: ['./chouette.component.css']
})
export class ChouetteComponent implements OnInit {
  choix: Number[] = [1, 2, 3, 4, 5, 6];
  joueursId: Number[] = [];
  combinaison: Number = 0;

  constructor(private router: Router, private joueursService: JoueursService, private route: ActivatedRoute) {
  }
  addPointsChouette() {
    let multiplication = parseInt(this.combinaison.toString()) * parseInt(this.combinaison.toString())
    this.joueursService.updatePointsJoueur(parseInt(this.route.snapshot.paramMap.get('id')), multiplication);
    this.router.navigate([PATH_GAME]);
    /*let player = this.joueursService.joueurs[parseInt(this.route.snapshot.paramMap.get('id'))-1]
    if(player.points>343){
      this.router.navigate([player.id]);
    }else{
      this.router.navigate([PATH_GAME]);
    }*/
  }
  stockNumber(number) {
    this.combinaison = number;
  }

  ngOnInit() {
  }
}
