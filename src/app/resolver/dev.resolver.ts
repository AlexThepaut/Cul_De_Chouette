import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Joueur } from '../models/joueur';
@Injectable({
    providedIn: 'root'
})
export class DevResolvers implements Resolve<any> {
    constructor() {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return [
            new Joueur(1, 'Alex'),
            new Joueur(2, 'Laurent'),
            new Joueur(3, 'Vincent')
        ];
    }
}