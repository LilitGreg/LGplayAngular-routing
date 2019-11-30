import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintrueComponent } from './admintrue.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AdmintrueComponent', () => {
  let component: AdmintrueComponent;
  let fixture: ComponentFixture<AdmintrueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmintrueComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
