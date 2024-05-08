import { Component, OnInit, inject } from '@angular/core';
import { AppStore } from '../../../../core/store/app.store';

@Component({
  selector: 'app-admin-usuario',
  templateUrl: './admin-usuario.component.html',
  styleUrl: './admin-usuario.component.css'
})
export class AdminUsuarioComponent  implements OnInit{
  readonly store = inject(AppStore);
/**
 *
 */
constructor() {
}
  ngOnInit(): void {
    this.readStore()  
  }
readStore(){
  console.log(this.store.sessionUser.DisplayName());
}

}
