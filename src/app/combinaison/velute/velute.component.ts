import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JoueursService } from 'src/app/services/joueurs.service';
import { PATH_GAME } from 'src/app/app.routes.constantes';

@Component({
  selector: 'app-velute',
  templateUrl: './velute.component.html',
  styleUrls: ['./velute.component.css']
})
export class VeluteComponent implements OnInit {
  choix: Number[] = [1, 2, 3, 4, 5, 6];
  joueursId: Number[] = [];
  combinaison: Number = 0;

  constructor(private router: Router, private joueursService: JoueursService, private route: ActivatedRoute) {

  }
  addPointsVelute() {
    let multiplication = parseInt(this.combinaison.toString()) * parseInt(this.combinaison.toString())
    this.joueursService.updatePointsJoueur(parseInt(this.route.snapshot.paramMap.get('id')), 2 * multiplication);
  }
  stockNumber(number) {
    this.combinaison = number;
  }
  ngOnInit() {
  }

}
