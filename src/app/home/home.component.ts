import { Component, OnInit } from '@angular/core';
import { JoueursService } from '../services/joueurs.service';
import { Joueur } from '../models/joueur';
import { Router } from '@angular/router';
import { PATH_GAME } from '../app.routes.constantes';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {isEmptyValidator} from "../validators/empty.validators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nameTemp: string;
  isDone: boolean;
  name = "";
  joueurEnteredCtrl: FormControl
  joueurForm: FormGroup

  constructor(public joueurService: JoueursService, private router: Router,private fb: FormBuilder) { 
    this.joueurEnteredCtrl = fb.control("",[isEmptyValidator])
    this.joueurForm = fb.group({
      joueurEntered:this.joueurEnteredCtrl,
    })
  }

  ngOnInit() {
    this.joueurService.delete();
  }

  nameChange(value){
    this.nameTemp = value.target.value;
  }

  addJoueur(){
    this.joueurService.createJoueur(this.nameTemp);
    this.nameTemp = '';
    this.name = "";
  }

  toGamePage(){
    this.router.navigate([PATH_GAME]);
  }
}
