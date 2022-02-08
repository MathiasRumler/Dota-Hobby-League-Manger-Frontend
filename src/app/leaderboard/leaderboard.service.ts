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

  constructor(private http: HttpClient) {}

  initializePlayersArray(){
    const players: Player[] = [];

    this.http.get('https://dotainhousebackend.herokuapp.com/api/v1/leaderboard')
      .pipe(map(res => res as Player[]))
      .subscribe((res: Player[]) =>{
        this.playerArray = res;
      })
      /*.pipe(map(res => res as Leaderboard))
      .subscribe((res:Leaderboard) => res?.players?.map((data: Player) => {
        players.push(data);
        console.log(data.account_id);
        this._players$.next(players);
      }))*/
  }

  get players$(): Observable<Player[] | null>{
    return this._players$.asObservable();
  }
}
