import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule, MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { GameTreeComponent } from './game-tree/game-tree.component';
import { ChouetteComponent } from './combinaison/chouette/chouette.component';
import { VeluteComponent } from './combinaison/velute/velute.component';
import { CulDeChouetteComponent } from './combinaison/cul-de-chouette/cul-de-chouette.component';
import { SuiteComponent } from './combinaison/suite/suite.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    GameTreeComponent,
    ChouetteComponent,
    VeluteComponent,
    CulDeChouetteComponent,
    SuiteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
