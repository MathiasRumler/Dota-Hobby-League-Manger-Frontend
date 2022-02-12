import { Component, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {BehaviorSubject, map, Observable, share, shareReplay, throwError} from "rxjs";
import { catchError, retry } from "rxjs";
import {decimalDigest} from "@angular/compiler/src/i18n/digest";

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

/*sharedReplay
We want to make that Observable hot,
so each new subscriber would get the last
emitted value. The operator shareReplay is
perfect for this purpose. Without going too
much into details, this operator will share a
single subscription to the underlying source.
It also accepts an optional parameter that
determines the size of the inner buffer.*/



@Injectable({
  providedIn: 'root'
})
export class LeaderboardService{
  private _players$ = new BehaviorSubject<Player[] | null>(null)
  public playerArray: Player[] = [];

  // @ts-ignore
  weakCache$:Observable<Player[]>

  constructor(private http: HttpClient) {}

  getLeaderBoard() : Observable<Player[]>{
    if (!this.weakCache$){
      this.weakCache$ = this.http.get('https://dotainhousebackend.herokuapp.com/api/v1/leaderboard')
        .pipe(map(res => res as Player[]),shareReplay(1))
    }
      return this.weakCache$


  }
}
