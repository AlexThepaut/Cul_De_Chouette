import { Component, OnInit } from '@angular/core';
import { PATH_GAME } from 'src/app/app.routes.constantes';
import { JoueursService } from 'src/app/services/joueurs.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bevue',
  templateUrl: './bevue.component.html',
  styleUrls: ['./bevue.component.css']
})
export class BevueComponent implements OnInit {

  constructor(private joueurService: JoueursService, private route: ActivatedRoute, private router: Router ) { }

  bevue() {
    this.joueurService.updatePointsJoueur(parseInt(this.route.snapshot.paramMap.get('id')), -10);
    this.router.navigate([PATH_GAME]);
  }

  ngOnInit() {
  }

}
