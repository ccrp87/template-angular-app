import { Component } from '@angular/core';
import { SeguridadService } from '../../servicios/seguridad.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestLoginUser } from '../../modelos/seguridad.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public loginForm: FormGroup;
  public messageErrorLogin: string = '';

  constructor(
    private seguridadService: SeguridadService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    let userLogin: RequestLoginUser = this.loginForm?.value;
    this.seguridadService.loginUser(userLogin).subscribe((loginData) => {
      alert()
      console.log(loginData)

      if (loginData.success === false) {
        console.log(loginData.message)
        this.messageErrorLogin = loginData.message;
        return;
      }

      if (loginData.success) {
        localStorage.setItem('token', loginData.data.jwt.token);
        localStorage.setItem(
          'permissions',
          JSON.stringify(loginData.data.permissions)
        );
        this.route.navigate(['seguridad/home']);
      }
    });
  }
}
