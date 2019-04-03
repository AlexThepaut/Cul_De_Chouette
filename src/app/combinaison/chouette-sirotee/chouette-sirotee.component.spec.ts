import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChouetteSiroteeComponent } from './chouette-sirotee.component';

describe('ChouetteSiroteeComponent', () => {
  let component: ChouetteSiroteeComponent;
  let fixture: ComponentFixture<ChouetteSiroteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChouetteSiroteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChouetteSiroteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
