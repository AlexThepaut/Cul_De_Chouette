import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JoueursService } from 'src/app/services/joueurs.service';

@Component({
  selector: 'app-velute',
  templateUrl: './velute.component.html',
  styleUrls: ['./velute.component.css']
})
export class VeluteComponent implements OnInit {

  constructor(private route: ActivatedRoute,private joueurService:JoueursService) { }
  addPointsVelute(combinaison){
    this.joueurService.updatePointsJoueur(parseInt(this.route.snapshot.paramMap.get('id')),2*(combinaison*combinaison))
  }
  ngOnInit() {
  }

}
