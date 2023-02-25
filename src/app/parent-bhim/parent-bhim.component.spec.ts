import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentBhimComponent } from './parent-bhim.component';

describe('ParentBhimComponent', () => {
  let component: ParentBhimComponent;
  let fixture: ComponentFixture<ParentBhimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentBhimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentBhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
