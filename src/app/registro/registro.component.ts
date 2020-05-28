import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})
export class RegistroComponent implements OnInit {

  users: string[] = ['Romina', 'Lilian', 'Rocio'];

  AgregarRegistro(nombreUsuario) {
    this.users.push(nombreUsuario.value);
    return false;
  }

  deleteUser(user: string){
    for (let i = 0; i < this.users.length; i++) {
      if (user === this.users[i]) {
        this.users.splice(i, 1);
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
