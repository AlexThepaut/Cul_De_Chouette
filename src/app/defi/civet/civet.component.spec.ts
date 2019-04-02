import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivetComponent } from './civet.component';

describe('CivetComponent', () => {
  let component: CivetComponent;
  let fixture: ComponentFixture<CivetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
