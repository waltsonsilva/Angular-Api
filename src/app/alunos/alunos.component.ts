import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { AlunosDataSource } from './alunos-datasource';
import { AlunoService } from '../services/aluno.service';
import { Aluno } from '../models/aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: AlunosDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];
  alunos: Aluno[];

  constructor(private service: AlunoService) { }

  ngOnInit() {
    this.dataSource = new AlunosDataSource(this.paginator, this.sort);
    this.listarAlunos();
  }

    listarAlunos(): void {
    this.service.getListaAlunos().subscribe(
      (res) => {
        this.alunos = res; 
        console.log("alunos: ", this.alunos)
      },
      (err) => {
        alert('There is a problem!' + JSON.stringify(err)); 
      }
    );
  }
}
