import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetosPage } from './objetos.page';

describe('ObjetosPage', () => {
  let component: ObjetosPage;
  let fixture: ComponentFixture<ObjetosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
