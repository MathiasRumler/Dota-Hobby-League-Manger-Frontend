import { Component, OnInit, Injectable } from '@angular/core';
import { MatCommonModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { HttpClient } from "@angular/common/http";
import {BehaviorSubject, map, Observable, throwError} from "rxjs";
import { catchError, retry } from "rxjs";
import {Leaderboard, Player, LeaderboardService} from "./leaderboard.service";


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit{
  playerArray: Player[] = [];
  playerColumns: string[] = ['account_id', 'gesamtGames', 'gesamtWins', 'radiantGames', 'radiantWins', 'direGames', 'direWins'];

  constructor(private leaderboardService: LeaderboardService, private http: HttpClient) {
    this.http.get('https://dotainhousebackend.herokuapp.com/api/v1/leaderboard')
      .pipe(map(res => res as Player[]))
      .subscribe((res: Player[]) =>{
        this.playerArray = res;
      })
  }

  ngOnInit() {

  }
}
