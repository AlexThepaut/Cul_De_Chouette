import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChouetteVeluteComponent } from './chouette-velute.component';

describe('ChouetteVeluteComponent', () => {
  let component: ChouetteVeluteComponent;
  let fixture: ComponentFixture<ChouetteVeluteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChouetteVeluteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChouetteVeluteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
