import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './courses/courses-list.component';
import { RouterGuardGuard } from './router-guard.guard';

// AQUI SAO FEITAS AS CONFIGURACOES DAS ROTAS
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
