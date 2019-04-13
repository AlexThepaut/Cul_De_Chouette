import { Component, OnDestroy } from '@angular/core';
import { JoueursService } from './services/joueurs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  title = 'cul-de-chouette-angular';

  constructor(private joueurService: JoueursService){

  }

  ngOnDestroy(){
    this.joueurService.delete();
  }
}
