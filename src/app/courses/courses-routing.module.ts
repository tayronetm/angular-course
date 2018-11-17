import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './courses-list.component';

const routes: Routes = [

// PARA EVITAR REPETICOES DE CURSOS AGRUPO TODOS OS ELEMENTOS DETRO DE UM ARRAY CHILD
{
  // ROTA PRINCIPAL
  path: 'cursos',
  children: [
      // ROTAS FLHAS ROTA QUE RECEBE VARIAVEL VEM por ultimo
    {
      path: ':nome',
      component: CoursesListComponent,
      // canActivate: [RouterGuardGuard]
    },
    // {
    //   path: 'atualizar',
    //   component: CoursesListComponent
    // },
    // {
    //   path: ':novo',
    //   component: CoursesListComponent
    // },
  ]
},
// PASSANDO ROTA COM PARAMETRO DOIS PONTOS MAIS VARIAVEL
{
  path: 'cursos/:nome',
  component: CoursesListComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CoursesRoutingModule{}
