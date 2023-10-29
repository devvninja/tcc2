import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { GradeService } from '../services/grade.service';
import { Grade } from '../model/grade';

@Injectable({
  providedIn: 'root'
})
export class GradeResolver implements Resolve<Grade>{

  constructor(private service: GradeService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Grade> {
    if (route.params && route.params['idcliente']) {
      return this.service.loadById(route.params['idcliente'])
    }
    return of({idcliente: '', nome: '', email: '', telefone: '', habilidade: '', graduacao: ''});
  }
}
