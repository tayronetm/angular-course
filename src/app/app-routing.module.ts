import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// AQUI SAO FEITAS AS CONFIGURACOES DAS ROTAS (SEPARADAS POR MODULOS)
const routes: Routes = [
  {
    path: 'cursos',
    loadChildren: 'src/app/courses/courses.module#CoursesModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
