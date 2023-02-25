import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildVidyaComponent } from './child-vidya.component';

describe('ChildVidyaComponent', () => {
  let component: ChildVidyaComponent;
  let fixture: ComponentFixture<ChildVidyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildVidyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildVidyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
