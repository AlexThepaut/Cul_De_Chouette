import { Routes } from '@angular/router';
import { PATH_HOME, PATH_GAME} from './app.routes.constantes';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { ResolversJoueurs } from './resolver/joueurs.resolver';
import { GameTreeComponent } from './game-tree/game-tree.component';
import { VictoireComponent } from './victoire/victoire.component';
import { GameGuard } from './guard/game.guard';

export const ROUTES: Routes = [
    { path: PATH_HOME, component: HomeComponent },
    {
        path: PATH_GAME, component: GameComponent, canActivate: [GameGuard],
        resolve: {
            joueurs: ResolversJoueurs
        }, children: [
            { path: ':id', component: GameTreeComponent },
        ]
    },{ path: ':id', component: VictoireComponent  }
];
