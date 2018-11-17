import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardGuard implements CanActivate {
  canActivate(
    // PROXIMA ROTA
    next: ActivatedRouteSnapshot,
    // ESTADO DA ROTA
    state: RouterStateSnapshot): boolean {
    // FALSE NAO ENTRA
    return true;
  }
}
