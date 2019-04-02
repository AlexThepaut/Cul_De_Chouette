import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrelottineComponent } from './grelottine.component';

describe('GrelottineComponent', () => {
  let component: GrelottineComponent;
  let fixture: ComponentFixture<GrelottineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrelottineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrelottineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
