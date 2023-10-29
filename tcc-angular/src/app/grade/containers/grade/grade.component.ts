import { Grade } from '../../model/grade';
import { GradeService } from '../../services/grade.service';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { UploadFileComponent } from 'src/app/upload-file/upload-file/upload-file.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit {


  grade$: Observable<Grade[]> | null = null;

  //gradeService: GradeService;

  constructor(
    private gradeService: GradeService,
    public dialog: MatDialog,
    public router: Router,
    private route: ActivatedRoute,
  ) {
    this.refresh();
  }


  refresh(){
    this.grade$ = this.gradeService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar a Lista.');
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  onView(grade: Grade) {
    this.router.navigate(['view', grade.idcliente], {relativeTo: this.route})

  }

  onRemove(grade: Grade){
    this.gradeService.remove(grade.idcliente).subscribe(
      () => {
      this.refresh();

    });
  }
 // () => this.onError('Erro ao tentar remover Currículo.')

}


