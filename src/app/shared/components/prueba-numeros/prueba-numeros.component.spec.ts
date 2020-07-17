import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaNumerosComponent } from './prueba-numeros.component';

describe('PruebaNumerosComponent', () => {
  let component: PruebaNumerosComponent;
  let fixture: ComponentFixture<PruebaNumerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaNumerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
