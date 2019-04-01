import { Component, OnInit } from '@angular/core';
import { JoueursService } from 'src/app/services/joueurs.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-suite',
  templateUrl: './suite.component.html',
  styleUrls: ['./suite.component.css']
})
export class SuiteComponent implements OnInit {

  joueursSelectCtrl: FormControl;
  joueursForm: FormGroup;

  constructor(private joueursService: JoueursService, private fb: FormBuilder) {
    this.joueursSelectCtrl = fb.control('', [Validators.required]);

    this.joueursForm = fb.group({
      joueurSelect: this.joueursSelectCtrl,
    });
  }

  validationJoueur() {
    if(this.joueursForm.value.joueurSelect != ''){
      this.joueursService.updatePointsJoueur(Number(this.joueursForm.value.joueurSelect), -10);
    }
  }

  ngOnInit() {
  }

}
