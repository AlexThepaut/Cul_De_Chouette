import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BouclietteComponent } from './boucliette.component';

describe('BouclietteComponent', () => {
  let component: BouclietteComponent;
  let fixture: ComponentFixture<BouclietteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BouclietteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BouclietteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
