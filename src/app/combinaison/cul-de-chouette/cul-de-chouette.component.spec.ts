import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulDeChouetteComponent } from './cul-de-chouette.component';

describe('CulDeChouetteComponent', () => {
  let component: CulDeChouetteComponent;
  let fixture: ComponentFixture<CulDeChouetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulDeChouetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulDeChouetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
