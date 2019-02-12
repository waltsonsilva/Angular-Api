import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno} from '../models/aluno';



@Injectable({
  providedIn: 'root'
})
export class AlunoService {

private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

   getListaAlunos(): Observable<Aluno[]> {
    const url = this.apiUrl + 'alunos';
    return this.http.get<Aluno[]>(url);
  }
}
