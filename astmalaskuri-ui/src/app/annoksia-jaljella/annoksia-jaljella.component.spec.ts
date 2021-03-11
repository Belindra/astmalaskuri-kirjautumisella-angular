/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AnnoksiaJaljellaComponent } from './annoksia-jaljella.component';

describe('AnnoksiaJaljellaComponent', () => {
  let component: AnnoksiaJaljellaComponent;
  let fixture: ComponentFixture<AnnoksiaJaljellaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnoksiaJaljellaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnoksiaJaljellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
