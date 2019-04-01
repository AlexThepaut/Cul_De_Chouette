import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JoueursService } from 'src/app/services/joueurs.service';

@Component({
  selector: 'app-velute',
  templateUrl: './velute.component.html',
  styleUrls: ['./velute.component.css']
})
export class VeluteComponent implements OnInit {

  choix = [1, 2, 3, 4, 5, 6];

  constructor(private route: ActivatedRoute, private joueurService: JoueursService) { }

  addPointsVelute(combinaison) {
    this.joueurService.updatePointsJoueur(parseInt(this.route.snapshot.paramMap.get('id')), 2 * (combinaison * combinaison))
  }
  
  ngOnInit() {
  }

}
