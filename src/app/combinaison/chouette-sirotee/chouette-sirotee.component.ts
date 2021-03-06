import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { JoueursService } from 'src/app/services/joueurs.service';
import { PATH_GAME } from 'src/app/app.routes.constantes';
import _  from 'lodash';
import { Joueur } from 'src/app/models/joueur';

@Component({
  selector: 'app-chouette-sirotee',
  templateUrl: './chouette-sirotee.component.html',
  styleUrls: ['./chouette-sirotee.component.css']
})
export class ChouetteSiroteeComponent implements OnInit {

  choix: Number[] = [1, 2, 3, 4, 5, 6];
  joueursId: Number[] = [];
  combinaison: Number = 0;
  combiSelectCtrl: FormControl
  victoireSelectCtrl: FormControl
  joueurForm: FormGroup
  listeJoueurs;
  gagnants: any[]=[];
  perdants: any[]=[];
  constructor(private router: Router, private joueursService: JoueursService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.combiSelectCtrl = fb.control("", [Validators.required])
    this.victoireSelectCtrl = fb.control([Validators.required])
    this.joueurForm = fb.group({
      combiSelect:this.combiSelectCtrl,
      victoireSelect:this.victoireSelectCtrl
    })
  }
  addPointsChouetteSirote() {
    let scoreChouette = -(parseInt(this.combinaison.toString()) * parseInt(this.combinaison.toString()));
    let scoreCulDeChouette = (10*parseInt(this.combinaison.toString()))+40;
    for(let i =0; i < this.gagnants.length; i++) {
      if(this.gagnants[i]==parseInt(this.route.snapshot.paramMap.get('id'))){
        this.joueursService.updatePointsJoueur(this.gagnants[i],scoreCulDeChouette,false,true)
      }else{
        this.joueursService.updatePointsJoueur(this.gagnants[i],25,false,true)
      }
    }
    for(let i =0; i < this.perdants.length; i++) {
      if(this.perdants[i]==parseInt(this.route.snapshot.paramMap.get('id'))){
        this.joueursService.updatePointsJoueur(this.perdants[i],scoreChouette,false,true)
        if(parseInt(this.combinaison.toString())==6){
          this.joueursService.updateCivet(this.perdants[i],true);
        }
      }else{
        this.joueursService.updatePointsJoueur(this.perdants[i],-25,false,true)
      }
    }
    if((this.joueursService.joueurs[parseInt(this.route.snapshot.paramMap.get('id'))-1].points<343)
    &&(this.perdants.length>0||this.gagnants.length>0)){
      this.router.navigate([PATH_GAME]);
    }
  }
  stockNumber(number) {
    this.combinaison = number;
  }
  gagne(victoire: boolean, id = Number(this.route.snapshot.paramMap.get('id'))) {
    if (victoire) {
      if(this.gagnants.indexOf(id)!=-1){
        _.remove(this.gagnants, id)
      }
      this.gagnants.push(id);
      if(this.perdants.indexOf(id)!=-1){
        _.remove(this.perdants, id)
      }
    } else {
      if(this.perdants.indexOf(id)!=-1){
        _.remove(this.perdants, id)
      }
      this.perdants.push(id);
      if(this.gagnants.indexOf(id)!=-1){
        _.remove(this.gagnants, id)
      }
    }

  }
  ngOnInit() {
    this.listeJoueurs = _.without(this.joueursService.joueurs, (this.joueursService.joueurs[parseInt(this.route.snapshot.paramMap.get('id')) - 1]));
  }
}

