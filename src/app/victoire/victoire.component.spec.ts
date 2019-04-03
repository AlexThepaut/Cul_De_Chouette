import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VictoireComponent } from './victoire.component';

describe('VictoireComponent', () => {
  let component: VictoireComponent;
  let fixture: ComponentFixture<VictoireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VictoireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VictoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
