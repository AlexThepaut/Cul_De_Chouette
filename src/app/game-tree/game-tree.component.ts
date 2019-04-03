import { Component, OnInit } from '@angular/core';
import { JoueursService } from '../services/joueurs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-tree',
  templateUrl: './game-tree.component.html',
  styleUrls: ['./game-tree.component.css']
})
export class GameTreeComponent implements OnInit {

  constructor(private joueService: JoueursService, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  isGrelottineDisabled(){
    if(this.joueService.joueurs[parseInt(this.route.snapshot.paramMap.get('id'))-1].grelottine){
      return false;
    }else{
      return true;
    }
  }

  isCivetDisabled(){
     if(this.joueService.joueurs[parseInt(this.route.snapshot.paramMap.get('id'))-1].civet > 0){
       return false;
     }else{
       return true;
     }
  }

  isBouclietteDisabled(){
    if(this.joueService.joueurs[parseInt(this.route.snapshot.paramMap.get('id'))-1].boucliette){
      return false;
    }else{
      return true;
    }
  }
}
