import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeluteComponent } from './velute.component';

describe('VeluteComponent', () => {
  let component: VeluteComponent;
  let fixture: ComponentFixture<VeluteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeluteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeluteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
