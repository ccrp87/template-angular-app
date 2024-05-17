import { Component, OnInit, effect, inject } from '@angular/core';
import { AppStore } from '../../store/app.store';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  public visible: boolean = true;
  readonly store = inject(AppStore);

  constructor() {
    effect(()=>{
     this.visible = this.store.isLoginUser();
    });
  }

  ngOnInit(): void {
    if (window.location.href.includes('seguridad/login')) {
      this.visible = false;
    }
  }
}
