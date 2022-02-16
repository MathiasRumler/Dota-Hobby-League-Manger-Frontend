import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMatchupsComponent } from './hero-matchups.component';

describe('HeroMatchupsComponent', () => {
  let component: HeroMatchupsComponent;
  let fixture: ComponentFixture<HeroMatchupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroMatchupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroMatchupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
