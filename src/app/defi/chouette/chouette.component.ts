import { Component, OnInit } from '@angular/core';
import { JoueursService } from 'src/app/services/joueurs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chouette',
  templateUrl: './chouette.component.html',
  styleUrls: ['./chouette.component.css']
})
export class ChouetteComponent implements OnInit {

  constructor(private route: ActivatedRoute,private joueurService:JoueursService) { }
  addPointsChouette(combinaison){
    this.joueurService.updatePointsJoueur(parseInt(this.route.snapshot.paramMap.get('id')),combinaison*combinaison)
  }
  ngOnInit() {
  }
}
