import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRentaComponent } from './form-renta.component';

describe('FormRentaComponent', () => {
  let component: FormRentaComponent;
  let fixture: ComponentFixture<FormRentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
