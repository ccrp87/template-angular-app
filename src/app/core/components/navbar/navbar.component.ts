import { Component, OnInit, inject } from '@angular/core';
import { AppStore, User } from '../../store/app.store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  readonly store = inject(AppStore);
  public userLogin: User = {};
  public visible: boolean = true;
  constructor() { }

  ngOnInit(): void { }
}
