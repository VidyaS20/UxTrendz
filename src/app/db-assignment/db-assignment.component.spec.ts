import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbAssignmentComponent } from './db-assignment.component';

describe('DbAssignmentComponent', () => {
  let component: DbAssignmentComponent;
  let fixture: ComponentFixture<DbAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
