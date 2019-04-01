import { Component, OnInit } from '@angular/core';
import { JoueursService } from 'src/app/services/joueurs.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-chouette-velute',
  templateUrl: './chouette-velute.component.html',
  styleUrls: ['./chouette-velute.component.css']
})
export class ChouetteVeluteComponent implements OnInit {
  choix: Number[] = [1, 2, 3, 4, 5, 6];
  joueursId: Number[] = [];
  combinaison: Number=0;
  joueurSelectCtrl:FormControl
  joueurForm:FormGroup
  constructor(private joueursService: JoueursService, private route: ActivatedRoute,private fb:FormBuilder) {
    this.joueurSelectCtrl = fb.control("")
    this.joueurForm = fb.group({
      joueurSelect:this.joueurSelectCtrl
    })

  }
  addPointsChouetteVelute() {
    let multiplication = parseInt(this.combinaison.toString()) * parseInt(this.combinaison.toString())
    /***aidez moi svp */
    let longeur = this.joueurForm.value.joueurSelect.length
    if(longeur==0){

    }else if(longeur==1){
      this.joueursService.updatePointsJoueur(Number(this.joueurForm.value.joueurSelect[0]), 2 * multiplication)

    }else{
      for (let i = 0; i < longeur; i++) {
        this.joueursService.updatePointsJoueur(Number(this.joueurForm.value.joueurSelect[i]),-(2 * multiplication) )   
      }

    }
  }
  stockNumber(number) {
    this.combinaison = number;
  }
  ngOnInit() {
  }
}
