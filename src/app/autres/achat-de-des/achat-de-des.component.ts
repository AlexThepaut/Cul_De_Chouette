import { Component, OnInit } from '@angular/core';
import { PATH_GAME } from 'src/app/app.routes.constantes';
import { JoueursService } from 'src/app/services/joueurs.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-achat-de-des',
  templateUrl: './achat-de-des.component.html',
  styleUrls: ['./achat-de-des.component.css']
})
export class AchatDeDesComponent implements OnInit {

  constructor(private joueurService: JoueursService, private route: ActivatedRoute, private router: Router ) { }

  acheter() {
    this.joueurService.updatePointsJoueur(parseInt(this.route.snapshot.paramMap.get('id')), -30);
    this.router.navigate([PATH_GAME]);
  }

  ngOnInit() {
  }

}
