import { Component, OnInit } from '@angular/core';
import { JoueursService } from 'src/app/services/joueurs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PATH_GAME } from 'src/app/app.routes.constantes';

@Component({
  selector: 'app-chouette-velute',
  templateUrl: './chouette-velute.component.html',
  styleUrls: ['./chouette-velute.component.css']
})
export class ChouetteVeluteComponent implements OnInit {
  choix: Number[] = [1, 2, 3, 4, 5, 6];
  joueursId: Number[] = [];
  combinaison: Number = 0;
  joueurSelectCtrl: FormControl
  combiSelectCtrl: FormControl
  joueurForm: FormGroup
  constructor(private router: Router, public joueursService: JoueursService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.joueurSelectCtrl = fb.control("", [Validators.required])
    this.combiSelectCtrl = fb.control("", [Validators.required])
    this.joueurForm = fb.group({
      joueurSelect: this.joueurSelectCtrl,
      combiSelect: this.combiSelectCtrl
    })
  }

  addPointsChouetteVelute() {
    let multiplication = parseInt(this.combinaison.toString()) * parseInt(this.combinaison.toString())
    /***aidez moi svp */
    let longeur = this.joueurForm.value.joueurSelect.length
    if (longeur == 0) {
      this.router.navigate([PATH_GAME]);
    } else if (longeur == 1) {
      this.joueursService.updatePointsJoueur(Number(this.joueurForm.value.joueurSelect[0]), 2 * multiplication)
    } else {
      for (let i = 0; i < longeur; i++) {
        this.joueursService.updatePointsJoueur(Number(this.joueurForm.value.joueurSelect[i]), -(2 * multiplication))
      }
    }
  }
  stockNumber(number) {
    this.combinaison = number;
  }
  ngOnInit() {
  }
}
