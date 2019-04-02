import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatDeDesComponent } from './achat-de-des.component';

describe('AchatDeDesComponent', () => {
  let component: AchatDeDesComponent;
  let fixture: ComponentFixture<AchatDeDesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchatDeDesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchatDeDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
