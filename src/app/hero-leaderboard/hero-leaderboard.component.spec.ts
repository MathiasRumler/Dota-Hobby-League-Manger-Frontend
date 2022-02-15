import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroLeaderboardComponent } from './hero-leaderboard.component';

describe('HeroLeaderboardComponent', () => {
  let component: HeroLeaderboardComponent;
  let fixture: ComponentFixture<HeroLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroLeaderboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
