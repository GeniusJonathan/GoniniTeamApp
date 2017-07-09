import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameavailablilityComponent } from './gameavailablility.component';

describe('GameavailablilityComponent', () => {
  let component: GameavailablilityComponent;
  let fixture: ComponentFixture<GameavailablilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameavailablilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameavailablilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
