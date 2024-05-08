import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  public visible:boolean = true;
  constructor(){

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
