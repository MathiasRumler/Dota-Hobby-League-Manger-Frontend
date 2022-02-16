import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {coerceNumberProperty} from "@angular/cdk/coercion";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {HeroStatsService} from "../hero-stats/hero-stats-service";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Hero, HeroDataService} from "../stand-alone-services/heroData-service";


export interface HeroLeaderboardStat{
  account_id : number;
  gesamtGames : number;
  gesamtWins : number;
  kill:number;
  death:number;
  assists:number;
  actuallRating:number;
}


@Component({
  selector: 'app-hero-leaderboard',
  templateUrl: './hero-leaderboard.component.html',
  styleUrls: ['./hero-leaderboard.component.css']
})
export class HeroLeaderboardComponent implements OnInit {

  routerId: number = 0;
  heroStatArray : MatTableDataSource<HeroLeaderboardStat> = new MatTableDataSource<HeroLeaderboardStat>()
  heroLeaderBoardTableColumns :string[] = ['account_id','gesamtGames','gesamtWins','kill','death','assists','actuallRating']
  heroData: Hero


  constructor(private router:Router, private activeRoute: ActivatedRoute, private http: HttpClient, private heroStatServe:HeroStatsService, private heroDataService: HeroDataService) { }

  @ViewChild(MatSort) sortes: MatSort

  ngOnInit(): void {
    this.routerId = this.activeRoute.snapshot.params['heroID']
    this.heroData = this.heroDataService.getHeroes(this.routerId);
    if (this.heroData==undefined){
      this.router.navigate(['/heroStats'])
    }
    this.http.get('https://dotainhousebackend.herokuapp.com/api/v1/heroStats/' + this.routerId)
      .pipe(map(response => response as HeroLeaderboardStat[]))
      .subscribe(data => {
        this.heroStatArray = new MatTableDataSource(data)
        this.heroStatArray.sort = this.sortes
      })

  }

  findPictureURL(){
    return this.heroStatServe.findPictureURL(this.routerId)
  }

}
