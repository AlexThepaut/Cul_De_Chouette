import { Routes } from '@angular/router';
import { PATH_HOME, PATH_GAME, PATH_RULES, PATH_TUTO} from './app.routes.constantes';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { ResolversJoueurs } from './resolver/joueurs.resolver';
import { GameTreeComponent } from './game-tree/game-tree.component';
import { VictoireComponent } from './victoire/victoire.component';
import { GameGuard } from './guard/game.guard';
import { RulesComponent } from './rules/rules.component';
import { TutoComponent } from './tuto/tuto.component';

export const ROUTES: Routes = [
    { path: PATH_HOME, component: HomeComponent },
    {
        path: PATH_GAME, component: GameComponent, canActivate: [GameGuard],
        resolve: {
            joueurs: ResolversJoueurs
        }, children: [
            { path: ':id', component: GameTreeComponent },
        ]
    },
    { path: PATH_RULES, component: RulesComponent },
    { path: PATH_TUTO, component: TutoComponent },
    { path: ':id', component: VictoireComponent  }
];
