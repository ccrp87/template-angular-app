import { Component, OnInit, inject } from '@angular/core';
import { AppStore } from '../../store/app.store';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  public visible: boolean = true;
  readonly store = inject(AppStore);

  constructor() { }

  ngOnInit(): void { }
}
