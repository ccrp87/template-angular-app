import { Component, OnInit, effect, inject } from '@angular/core';
import { AppStore } from '../../store/app.store';
import { SeguridadService } from '../../../modulos/seguridad/servicios/seguridad.service';
import { User } from '../../../modulos/seguridad/modelos/seguridad.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  readonly store = inject(AppStore);
  public userLogin: User={};
  public visible: boolean = true;
  constructor(private seguridadSevice: SeguridadService) {
    effect(() => {
      this.userLogin=this.store.userLogin()
    });

    effect(() => {
      this.visible = this.store.isLoginUser();
    });

    //this.userLogin = seguridadSevice.getUserLogin();
  }

  ngOnInit(): void {
    if (window.location.href.includes('seguridad/login')) {
      this.visible = false;
    }

    this.toggle();
  }

  /**
   *
   */
  toggle() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle?.addEventListener('click', function () {
      mobileMenu?.classList.toggle('hidden');
    });
  }

  cerrarSession(): void {
    this.store.closeSession();
    this.seguridadSevice.cerrarSession();
  }
}
