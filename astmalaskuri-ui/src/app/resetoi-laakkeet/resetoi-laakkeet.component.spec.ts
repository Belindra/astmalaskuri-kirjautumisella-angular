import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetoiLaakkeetComponent } from './resetoi-laakkeet.component';

describe('ResetoiLaakkeetComponent', () => {
  let component: ResetoiLaakkeetComponent;
  let fixture: ComponentFixture<ResetoiLaakkeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetoiLaakkeetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetoiLaakkeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
