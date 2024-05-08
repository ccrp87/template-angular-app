import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  public visible: boolean = true;

  constructor(private activateRoute: ActivatedRouteSnapshot) {}

  ngOnInit(): void {
    if (window.location.href.includes('seguridad/login')) {
      this.visible = false;
    }
  }
}
