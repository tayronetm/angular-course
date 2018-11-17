import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  name = '';

  // DECLARAR VARIAVEL DE ATRIBUTO DA ROTA

  constructor(
    private actRout: ActivatedRoute
  ) {
    this.name = this.actRout.snapshot.params['nome'];
  }

  ngOnInit() {
  }

}
