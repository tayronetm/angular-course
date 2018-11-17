import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './courses/courses-list.component';

// AQUI SAO FEITAS AS CONFIGURACOES DAS ROTAS
const routes: Routes = [
// PARA EVITAR REPETICOES DE CURSOS AGRUPO TODOS OS ELEMENTOS DETRO DE UM ARRAY CHILD
  {
    // ROTA PRINCIPAL
    path: 'cursos',
    children: [
        // ROTAS FLHAS ROTA QUE RECEBE VARIAVEL VEM por ultimo
      {
        path: 'novo',
        component: CoursesListComponent
      },
      {
        path: 'atualizar',
        component: CoursesListComponent
      },
      {
        path: ':nome',
        component: CoursesListComponent
      },
    ]
  },
  // {
  //   path: 'cursos',
  //   component: CoursesListComponent
  // }
  // PASSANDO ROTA COM PARAMETRO DOIS PONTOS MAIS VARIAVEL
  {
    path: 'cursos/:nome',
    component: CoursesListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
