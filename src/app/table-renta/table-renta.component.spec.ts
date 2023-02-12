import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRentaComponent } from './table-renta.component';

describe('TableRentaComponent', () => {
  let component: TableRentaComponent;
  let fixture: ComponentFixture<TableRentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableRentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
