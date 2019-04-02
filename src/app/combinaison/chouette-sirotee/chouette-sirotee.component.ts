import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { JoueursService } from 'src/app/services/joueurs.service';
import { PATH_GAME } from 'src/app/app.routes.constantes';
import _  from 'lodash';

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
  participantsSelectCtrl: FormControl
  victoireSelectCtrl: FormControl
  joueurForm: FormGroup
  listeJoueurs;
  gagnants: any[]=[];
  perdants: any[]=[];
  constructor(private router: Router, private joueursService: JoueursService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.combiSelectCtrl = fb.control("", [Validators.required])
    this.participantsSelectCtrl = fb.control("", [Validators.required])
    this.victoireSelectCtrl = fb.control("", [Validators.required])
    this.joueurForm = fb.group({
      combiSelect: this.combiSelectCtrl,
      participantsSelect:this.participantsSelectCtrl,
      victoireSelect:this.victoireSelectCtrl
    })
  }
  addPointsChouetteSirote() {
    let scoreChouette = -(parseInt(this.combinaison.toString()) * parseInt(this.combinaison.toString()));
    let scoreCulDeChouette = (10*parseInt(this.combinaison.toString()))+10;
    for(let i =0; i < this.gagnants.length; i++) {
      if(this.gagnants[i]==parseInt(this.route.snapshot.paramMap.get('id'))){
        this.joueursService.updatePointsJoueur(this.gagnants[i],scoreCulDeChouette)

      }else{
        this.joueursService.updatePointsJoueur(this.gagnants[i],25)
      }
    }
    for(let i =0; i < this.perdants.length; i++) {
      if(this.perdants[i]==parseInt(this.route.snapshot.paramMap.get('id'))){
        this.joueursService.updatePointsJoueur(this.perdants[i],scoreChouette)
      }else{
        this.joueursService.updatePointsJoueur(this.perdants[i],-25)
      }
    }
    this.router.navigate([PATH_GAME]);
  }
  stockNumber(number) {
    this.combinaison = number;
  }
  gagne(victoire: boolean, id = Number(this.route.snapshot.paramMap.get('id'))) {
    console.log(id);
    if (victoire) {
      if(this.gagnants.indexOf(id)!=-1){
        _.remove(this.gagnants, id)
      }
      this.gagnants = [...this.gagnants, id];
      if(this.perdants.indexOf(id)!=-1){
        _.remove(this.perdants, id)
      }
    } else {
      if(this.perdants.indexOf(id)!=-1){
        _.remove(this.perdants, id)
      }
      this.perdants = [...this.perdants, id];
      if(this.gagnants.indexOf(id)!=-1){
        _.remove(this.gagnants, id)
      }
    }
  }
  ngOnInit() {
    this.listeJoueurs = _.without(this.joueursService.joueurs, (this.joueursService.joueurs[parseInt(this.route.snapshot.paramMap.get('id')) - 1]));
  }
}

