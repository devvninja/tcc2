import { Grade } from './../../model/grade';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { GradeService } from '../../services/grade.service';


@Component({
  selector: 'app-grade-form',
  templateUrl: './grade-form.component.html',
  styleUrls: ['./grade-form.component.scss']
})
export class GradeFormComponent implements OnInit {


  form = this.formBuilder.group({
    nome: [''],
    email: [''],
    telefone: [''],
    habilidade: [''],
    graduacao: ['']

  });
  gradeService: any;

  constructor(private formBuilder: NonNullableFormBuilder,
    private location: Location,
    private route: ActivatedRoute,
    private service: GradeService,
    private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    const grade: Grade = this.route.snapshot.data['grade'];
    this.form.setValue({
      nome: grade.nome,
      email: grade.email,
      telefone: grade.telefone,
      habilidade: grade.habilidade,
      graduacao: grade.graduacao
    })
  }

  onSubmit(){
   this.service.save(this.form.value)
   .subscribe(result => this.onSucess(), error => this.onError());
   }

  onVoltar(){
    this.location.back();
  }

  onError(){
    this.snackBar.open('Erro ao salvar Currículo!', '', {duration: 5000})
  }

  onEx(){
    this.snackBar.open('Currículo excluído com sucesso!', '', {duration: 5000});
  }

  onSucess(){
    this.snackBar.open('Currículo salvo com sucesso!', '', {duration: 5000});
    this.onVoltar();
  }

  onExcluir(){
    this.onEx();
    this.location.back();
  }

}
