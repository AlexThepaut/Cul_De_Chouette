import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouffletteComponent } from './soufflette.component';

describe('SouffletteComponent', () => {
  let component: SouffletteComponent;
  let fixture: ComponentFixture<SouffletteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouffletteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouffletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
