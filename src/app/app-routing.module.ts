import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AlunosComponent} from './alunos/alunos.component';

const routes: Routes = [
{path:'listarAluno', component: AlunosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
