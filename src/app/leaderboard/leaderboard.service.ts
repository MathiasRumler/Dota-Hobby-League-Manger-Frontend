import { Component, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {BehaviorSubject, map, Observable, throwError} from "rxjs";
import { catchError, retry } from "rxjs";

export interface Leaderboard{
  players?: Player[];
}

export interface Player{
  account_id : number;
  gesamtGames : number;
  gesamtWins : number;
  radiantGames : number;
  radiantWins : number;
  direGames : number;
  direWins : number;
}

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService{
  private _players$ = new BehaviorSubject<Player[] | null>(null)
  public playerArray: Player[] = [];

  // @ts-ignore
  weakCache$:Observable<Player[]>

  constructor(private http: HttpClient) {}

  getLeaderBoard() : Observable<Array<Player>>{
    if (!this.weakCache$){
      this.weakCache$ = this.http.get('https://dotainhousebackend.herokuapp.com/api/v1/leaderboard')
        .pipe(map(res => res as Player[]))
    }
      return this.weakCache$


  }
}
