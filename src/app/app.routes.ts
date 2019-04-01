import { Routes } from '@angular/router';
import { PATH_HOME, PATH_GAME } from './app.routes.constantes';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { DevResolvers } from './resolver/dev.resolver';
import { GameTreeComponent } from './game-tree/game-tree.component';

export const ROUTES: Routes = [
    { path: PATH_HOME, component: HomeComponent },
    {
        path: PATH_GAME, component: GameComponent /*, canActivate: [EnoughPlayerGuard], */,
        resolve: {
            joueurs: DevResolvers
        },children:[
            {path: '/:id', component: GameTreeComponent},
        ]
    }
];
