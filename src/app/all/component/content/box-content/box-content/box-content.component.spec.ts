/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BoxContentComponent } from './box-content.component';

describe('BoxContentComponent', () => {
  let component: BoxContentComponent;
  let fixture: ComponentFixture<BoxContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
