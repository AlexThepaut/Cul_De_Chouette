import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChouetteComponent } from './chouette.component';

describe('ChouetteComponent', () => {
  let component: ChouetteComponent;
  let fixture: ComponentFixture<ChouetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChouetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChouetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
