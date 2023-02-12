import { Component, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

interface RentaItem {
  completo: string;
  salario: number;
  departamento: string;
  afp: number;
  iss: number;
  renta: number;
  salariofinal: number;
  tramo: string;
}

interface UserData {
  nombre: string;
  apellido: string;
  salario: number;
  departamento: string;
}

@Component({
  selector: 'app-table-renta',
  templateUrl: './table-renta.component.html',
  styleUrls: ['./table-renta.component.css']
})
export class TableRentaComponent implements OnInit {

  displayedColumns = ['nombreCompleto', 'salario', 'departamento', 'afp', 'iss', 'renta', 'salariofinal', 'tramo'];
  @Input() SendToChild: EventEmitter<UserData> = new EventEmitter<UserData>();
  @ViewChild(MatTable) table: MatTable<RentaItem> | undefined;

  constructor() { }

  ngOnInit(): void {
    this.SendToChild.subscribe((data) => {

      this.SetNewData(data);

      this.Rentas.push(this.CurrentData);

      this.table?.renderRows();

      this.CurrentData = { completo: '', salario: 0, departamento: '', afp: 0, iss: 0, renta: 0, salariofinal: 0, tramo: '' };
    });
  }


  SetNewData(data: UserData) {
    this.CurrentData.completo = data.nombre + " " + data.apellido;
    this.CurrentData.salario = Number(data.salario);
    this.CurrentData.departamento = data.departamento;
    this.CurrentData.afp = (data.salario * 0.0625);
    this.CurrentData.iss = (data.salario * 0.03);
    this.SetRentaAndTramo(data);
  }

  SetRentaAndTramo(data: UserData) {
    var salario = Number(data.salario) - this.CurrentData.afp - this.CurrentData.iss;
    var porcentaje = 0;
    var cuota = 0;
    var exceso = 0;
    var tramo = '';
    var iss = this.CurrentData.iss;
    var afp = this.CurrentData.afp;

    if (salario >= 0.01 && salario <= 472.00) {
      porcentaje = 0;
      tramo = "I TRAMO";
      cuota = 0;
      exceso = 0;
    }
    else if (salario > 472.00 && salario <= 895.24) {
      porcentaje = 0.1;
      tramo = "II TRAMO";
      cuota = 17.67;
      exceso = 472.00;
    }
    else if (salario > 895.24 && salario <= 2038.10) {
      porcentaje = 0.2;
      tramo = "III TRAMO";
      cuota = 60.00;
      exceso = 895.24;
    }
    else if (salario > 2038.10) {
      porcentaje = 0.3;
      tramo = "IV TRAMO";
      cuota = 288.57;
      exceso = 2038.10;
    }

    this.CurrentData.renta = (((data.salario - exceso - afp - iss) * porcentaje) + cuota);
    this.CurrentData.tramo = tramo;
    this.CurrentData.salariofinal = Number(data.salario) - afp - iss - this.CurrentData.renta;
  }

  CurrentData: RentaItem = { completo: '', salario: 0, departamento: '', afp: 0, iss: 0, renta: 0, salariofinal: 0, tramo: '' };

  public Rentas: RentaItem[] = [];
}
