import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './courses/courses-list.component';

// AQUI SAO FEITAS AS CONFIGURACOES DAS ROTAS
const routes: Routes = [
  // {
  //   path: 'cursos',
  //   component: CoursesListComponent
  // }
  // PASSANDO ROTA COM PARAMETRO DOIS PONTOS MAIS VARIAVEL
  {
    path: 'cursos/:nome',
    component: CoursesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
