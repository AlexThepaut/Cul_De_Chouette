import { Component, OnInit } from '@angular/core';
import { JoueursService } from 'src/app/services/joueurs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PATH_GAME } from 'src/app/app.routes.constantes';

@Component({
  selector: 'app-neant',
  templateUrl: './neant.component.html',
  styleUrls: ['./neant.component.css']
})
export class NeantComponent implements OnInit {

  constructor(private joueurService: JoueursService, private route: ActivatedRoute, private router: Router ) { }

  addGrelottine(combinaison) {
    this.joueurService.updateGrelottine(parseInt(this.route.snapshot.paramMap.get('id')), true);
    this.router.navigate([PATH_GAME]);
  }
  ngOnInit() {
  }

}
