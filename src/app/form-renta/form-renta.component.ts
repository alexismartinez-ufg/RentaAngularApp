import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface Departamentos {
  value: string;
}

interface UserData {
  nombre: string;
  apellido: string;
  salario: number;
  departamento: string;
}

@Component({
  selector: 'app-form-renta',
  templateUrl: './form-renta.component.html',
  styleUrls: ['./form-renta.component.css']
})
export class FormRentaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() notify: EventEmitter<UserData> = new EventEmitter<UserData>();

  EmitData(){
    if(this.data.nombre!="" &&this.data.apellido!="" && this.data.departamento!=""){
      this.notify.emit(this.data);
      this.data = { nombre: '', apellido: '', salario: 0, departamento: ''};
    }
  }

  data: UserData = { nombre: '', apellido: '', salario: 0, departamento: ''}

  selectedValue: string = '';

  departamentos: Departamentos[] = [
    { value: 'Informatica'},
    { value: 'Informatica2XD'},
    { value: 'Administración'},
    { value: 'Recursos Humanos'},
    { value: 'Recursos Reptilianos'},
    { value: 'Allahu akbar' },
  ];
}
