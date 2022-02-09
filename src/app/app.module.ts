import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import { PlayerComponent } from './player/player.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {Routes, RouterModule} from "@angular/router";
import { HeroStatsComponent } from './hero-stats/hero-stats.component';
import { TeamsComponent } from './teams/teams.component';

const appRoutes: Routes =[
  {path: '', component: DashboardComponent},
  {path: 'heroStats', component: HeroStatsComponent},
  {path: 'player/:id', component: PlayerComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'leaderboard', component: LeaderboardComponent},
  {path: 'heroLeaderboard/:heroID', component: AppComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    PlayerComponent,
    DashboardComponent,
    NavbarComponent,
    HeroStatsComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot((appRoutes),
      {initialNavigation: 'disabled'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
