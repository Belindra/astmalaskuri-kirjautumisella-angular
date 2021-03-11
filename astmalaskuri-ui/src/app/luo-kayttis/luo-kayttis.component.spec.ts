import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuoKayttisComponent } from './luo-kayttis.component';

describe('LuoKayttisComponent', () => {
  let component: LuoKayttisComponent;
  let fixture: ComponentFixture<LuoKayttisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuoKayttisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuoKayttisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
