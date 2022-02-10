import { Component, OnInit } from '@angular/core';
import {Player, LeaderboardService} from "./leaderboard.service";


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit{
  playerArray: Player[] = [];
  playerColumns: string[] = ['account_id', 'gesamtGames', 'gesamtWins', 'radiantGames', 'radiantWins', 'direGames', 'direWins'];

  constructor(private leaderboardService: LeaderboardService) {

  }

  ngOnInit() {
    this.leaderboardService.getLeaderBoard()
      .subscribe(data => this.playerArray = data  )
  }
}
