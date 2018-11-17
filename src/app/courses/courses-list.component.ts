import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  name = '';

  // DECLARAR VARIAVEL DE ATRIBUTO DA ROTA

  constructor(
    private actRout: ActivatedRoute,
    private router: Router
  ) {
    this.name = this.actRout.snapshot.params['nome'];
  }
  // ALTERACAO DA ROTA POR CODIGO
  ngOnInit() {
    // this.router.navigate(['/cursos/sencha'])
  }

}
