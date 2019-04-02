import { Component, OnInit } from '@angular/core';
import { JoueursService } from 'src/app/services/joueurs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PATH_GAME } from 'src/app/app.routes.constantes';

@Component({
  selector: 'app-boucliette',
  templateUrl: './boucliette.component.html',
  styleUrls: ['./boucliette.component.css']
})
export class BouclietteComponent implements OnInit {

  constructor(private joueurService: JoueursService, private route: ActivatedRoute, private router: Router ) { }

  bevue() {
    this.joueurService.setBoucliette(parseInt(this.route.snapshot.paramMap.get('id')));
    this.router.navigate([PATH_GAME]);
  }

  ngOnInit() {
  }

}
