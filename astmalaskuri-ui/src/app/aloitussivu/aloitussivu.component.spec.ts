import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AloitussivuComponent } from './aloitussivu.component';

describe('AloitussivuComponent', () => {
  let component: AloitussivuComponent;
  let fixture: ComponentFixture<AloitussivuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AloitussivuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AloitussivuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
