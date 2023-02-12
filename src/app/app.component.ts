import { Component, EventEmitter } from '@angular/core';

interface UserData {
  nombre: string;
  apellido: string;
  salario: number;
  departamento: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public listitem: Array<UserData> = [];

  SendToChild = new EventEmitter<UserData>();
  onNotified(data: UserData) {
    this.SendToChild.emit(data);
  }
}
