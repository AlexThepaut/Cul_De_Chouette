import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BevueComponent } from './bevue.component';

describe('BevueComponent', () => {
  let component: BevueComponent;
  let fixture: ComponentFixture<BevueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BevueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BevueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
