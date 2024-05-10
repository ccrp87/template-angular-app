import { Component, OnInit, effect, inject } from '@angular/core';
import { AppStore } from '../../store/app.store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  readonly store = inject(AppStore);

  public visible:boolean = true;
  constructor(){
    effect(()=>{
      this.visible = this.store.loginUser();
     });
  }

  ngOnInit(): void {
    if (window.location.href.includes("seguridad/login")) {
      this.visible = false;
    }

    this.toggle()
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

}
