import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeantComponent } from './neant.component';

describe('NeantComponent', () => {
  let component: NeantComponent;
  let fixture: ComponentFixture<NeantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
