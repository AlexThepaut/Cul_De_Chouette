import { Component, OnInit } from '@angular/core';
import { JoueursService } from 'src/app/services/joueurs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-neant',
  templateUrl: './neant.component.html',
  styleUrls: ['./neant.component.css']
})
export class NeantComponent implements OnInit {

  constructor(private joueurService: JoueursService, private route: ActivatedRoute) { }

  addGrelottine(combinaison) {
    this.joueurService.updateGrelottine(parseInt(this.route.snapshot.paramMap.get('id')), true);
  }
  ngOnInit() {
  }

}
