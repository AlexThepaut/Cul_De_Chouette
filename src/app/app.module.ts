import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule, MatButtonModule, MatListModule, MatSelectModule, MatSliderModule, MatButtonToggleModule, MatTabsModule, MatRadioModule, MatCardModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { GameTreeComponent } from './game-tree/game-tree.component';
import { ChouetteComponent } from './combinaison/chouette/chouette.component';
import { VeluteComponent } from './combinaison/velute/velute.component';
import { CulDeChouetteComponent } from './combinaison/cul-de-chouette/cul-de-chouette.component';
import { SuiteComponent } from './combinaison/suite/suite.component';
import { ChouetteVeluteComponent } from './combinaison/chouette-velute/chouette-velute.component';
import { NeantComponent } from './combinaison/neant/neant.component';
import { GrelottineComponent } from './defi/grelottine/grelottine.component';
import { CivetComponent } from './defi/civet/civet.component';
import { SouffletteComponent } from './defi/soufflette/soufflette.component';
import { BevueComponent } from './autres/bevue/bevue.component';
import { BouclietteComponent } from './autres/boucliette/boucliette.component';
import { AchatDeDesComponent } from './autres/achat-de-des/achat-de-des.component';
import { ChouetteSiroteeComponent } from './combinaison/chouette-sirotee/chouette-sirotee.component';
import { CookieService } from 'ngx-cookie-service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    GameTreeComponent,
    ChouetteComponent,
    CulDeChouetteComponent,
    SuiteComponent,
    VeluteComponent,
    ChouetteVeluteComponent,
    NeantComponent,
    ChouetteSiroteeComponent,
    GrelottineComponent,
    CivetComponent,
    SouffletteComponent,
    BevueComponent,
    BouclietteComponent,
    AchatDeDesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatSelectModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatRadioModule,
    MatToolbarModule
  ],
  providers: [
    FormBuilder,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
