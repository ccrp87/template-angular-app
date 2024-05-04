import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-usuario',
  templateUrl: './admin-usuario.component.html',
  styleUrl: './admin-usuario.component.css'
})
export class AdminUsuarioComponent {
getRandomInt(min:number=1, max:number=2001) {
  min = Math.ceil(1);
  max = Math.floor(2001);
  return Math.floor(Math.random() * (max - min) + min)+"";
}
}
