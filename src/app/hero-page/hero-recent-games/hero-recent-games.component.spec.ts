import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroRecentGamesComponent } from './hero-recent-games.component';

describe('HeroRecentGamesComponent', () => {
  let component: HeroRecentGamesComponent;
  let fixture: ComponentFixture<HeroRecentGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroRecentGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroRecentGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
