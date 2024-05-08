import { Component, effect, inject } from '@angular/core';
import { AppStore } from '../../../../core/store/app.store';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly store = inject(AppStore);
  public data:any
  constructor(){
    effect(()=>{
      this.data = this.store.sessionUser.DisplayName()
    })
  }
  readStore(){
    console.log(this.store.sessionUser.DisplayName());
  }
}
