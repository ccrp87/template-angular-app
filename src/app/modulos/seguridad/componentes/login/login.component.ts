import { Component, OnInit, inject } from '@angular/core';
import { SeguridadService } from '../../servicios/seguridad.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestLoginUser } from '../../modelos/seguridad.model';
import { Router } from '@angular/router';
import { AppStore } from '../../../../core/store/app.store';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public messageErrorLogin: string = '';
  public isModal:boolean = false;
  readonly store = inject(AppStore);

  constructor(
    private seguridadService: SeguridadService,
    private formBuilder: FormBuilder,
    private route: Router,
    private dialogRef: MatDialogRef<LoginComponent>
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    if (this.seguridadService.hasSessionActive()) {
      window.location.href = 'seguridad/home';
    }
  }

  login() {
    
    let userLogin: RequestLoginUser = this.loginForm?.value;
    this.seguridadService.loginUser(userLogin).subscribe(
      (loginData) => {
        if (loginData.success === false) {
          this.messageErrorLogin = loginData.message;
          return;
        }

        if (loginData.success) {
          localStorage.setItem('token', loginData.data.jwt.token);
          localStorage.setItem(
            'permissions',
            JSON.stringify(loginData.data.permissions)
          );
          this.store.startSessionUser(true);
          if (!this.isModal) {
            this.route.navigate(['seguridad/home']);
            this.dialogRef.close()
          }
        }
      },
      (httpError) => {
        if (httpError!=null) {
          this.messageErrorLogin = httpError.error.message;
        }
      }
    );
  }
}
