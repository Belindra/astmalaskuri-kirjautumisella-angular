/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ViimeksiKaytetytComponent } from './viimeksi-kaytetyt.component';

describe('ViimeksiKaytetytComponent', () => {
  let component: ViimeksiKaytetytComponent;
  let fixture: ComponentFixture<ViimeksiKaytetytComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViimeksiKaytetytComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViimeksiKaytetytComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
