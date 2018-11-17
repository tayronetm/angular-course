import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CoursesListComponent } from './courses/courses-list.component';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardGuard implements CanActivate, CanDeactivate<CoursesListComponent> {
  canActivate(
    // PROXIMA ROTA
    next: ActivatedRouteSnapshot,
    // ESTADO DA ROTA
    state: RouterStateSnapshot): boolean {
    // FALSE NAO ENTRA
    return true;
  }

  // NAO DEIXA SAIR SE RETORNAR FAALSO
  canDeactivate(
    component: CoursesListComponent,
    next: ActivatedRouteSnapshot,
    // ESTADO DA ROTA
    state: RouterStateSnapshot): boolean {
    // FALSE NAO ENTRA
    return true;
  }

  }

