import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KayttajaComponent } from './kayttaja.component';

describe('KayttajaComponent', () => {
  let component: KayttajaComponent;
  let fixture: ComponentFixture<KayttajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KayttajaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KayttajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
