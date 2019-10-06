import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaObjetosPage } from './lista-objetos.page';

describe('ListaObjetosPage', () => {
  let component: ListaObjetosPage;
  let fixture: ComponentFixture<ListaObjetosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaObjetosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaObjetosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
