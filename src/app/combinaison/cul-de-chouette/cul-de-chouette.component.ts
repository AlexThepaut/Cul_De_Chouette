import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JoueursService } from 'src/app/services/joueurs.service';

@Component({
  selector: 'app-cul-de-chouette',
  templateUrl: './cul-de-chouette.component.html',
  styleUrls: ['./cul-de-chouette.component.css']
})
export class CulDeChouetteComponent implements OnInit {

  choix = [1, 2, 3, 4, 5, 6];

  constructor(private route: ActivatedRoute,private joueurService:JoueursService) { }
  addPointsChouette(combinaison){
    this.joueurService.updatePointsJoueur(parseInt(this.route.snapshot.paramMap.get('id')),combinaison*10+40)
  }

  ngOnInit() {
  }

}
