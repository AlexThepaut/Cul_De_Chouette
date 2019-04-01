import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule, MatButtonModule, MatListModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { GameTreeComponent } from './game-tree/game-tree.component';
import { ChouetteComponent } from './combinaison/chouette/chouette.component';
import { VeluteComponent } from './combinaison/velute/velute.component';
import { ChouetteVeluteComponent } from './combinaison/chouette-velute/chouette-velute.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    GameTreeComponent,
    ChouetteComponent,
    VeluteComponent,
    ChouetteVeluteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
