import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerProfilePage } from './trainer-profile.page';

describe('TrainerProfilePage', () => {
  let component: TrainerProfilePage;
  let fixture: ComponentFixture<TrainerProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
