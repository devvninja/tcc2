import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Grade } from '../model/grade';
import { first } from 'rxjs/operators'

// Faz Injeção de Dependencia
@Injectable({
  providedIn: 'root'
})
export class GradeService {

// Caso utilize json local
//  private readonly API = 'assets/grade.json'
// Caso utilize BD no Spring - redirecionamento
  private readonly API = 'api/cliente'


  constructor(private httpClient: HttpClient) { }

  // Lista (get - pega dado)
  // Observable de Objeto que retorna um Array da Grade
  list() {
    return this.httpClient.get<Grade[]>(this.API)
    .pipe(  // Log para verificar o funcionamento - (para debug)
    first(), // Assim que obter a primeira resposta, faz o Unsubscrible
    );
  }

   //Chamadas HTTP GET
  loadById (idcliente: string){
     return this.httpClient.get<Grade>(`${this.API}/${idcliente}`);
  }

  //Se EXISTIR um ID, UPDATE - SENÃO, CRIA.
  save(record: Partial<Grade>) {
    if (record.idcliente){
      return this.update(record);
    }
    return this.create(record);
  }

  //Chamadas HTTP POST
  private create(record: Partial<Grade>){
    return this.httpClient.post<Grade>(this.API, record).pipe(first());
  }

  //Chamadas HTTP PUT
  private update(record: Partial<Grade>){
    return this.httpClient.put<Grade>(`${this.API}/${record.idcliente}`, record).pipe(first());
  }


  //Chamada HTTP DELETE
  remove(idcliente: string){
    return this.httpClient.delete(`${this.API}/${idcliente}`).pipe(first());
   }


}
