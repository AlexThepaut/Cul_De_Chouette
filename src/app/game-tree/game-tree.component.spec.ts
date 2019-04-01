import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTreeComponent } from './game-tree.component';

describe('GameTreeComponent', () => {
  let component: GameTreeComponent;
  let fixture: ComponentFixture<GameTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
