import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {map, Observable} from "rxjs";
import {Player} from "../leaderboard/leaderboard.service";
import {HttpClient} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort, Sort} from '@angular/material/sort';
import {HeroStatsService} from "./hero-stats-service";
import {Hero, HeroDataService} from "../stand-alone-services/heroData-service";


@Component({
  selector: 'app-hero-stats',
  templateUrl: './hero-stats.component.html',
  styleUrls: ['./hero-stats.component.css']
})


//Für den sort shit muss "this.statArray.sort = this.sortes" ausgeführt werden nachdem MatTableDataSource initialisiert wurde

export class HeroStatsComponent implements OnInit , AfterViewInit{

  // statArray:HeroStat[] = [];
  statArray: MatTableDataSource<HeroStat> = new MatTableDataSource();
  heroStatTableColumns: string[] = ['hero_id','picks','winrate','winwhenpicked','bans','losewhenpick','pickParticipation','banParticipation','pickbanParticipation']



  constructor(private http:HttpClient, private heroStatServe:HeroStatsService, private heroDataService: HeroDataService) { }


  // @ts-ignore
  @ViewChild(MatSort) sortes: MatSort;

  ngOnInit(): void {
    this.heroStatServe.getHeroStats()
      .subscribe((res: HeroStat[]) =>{
        // this.statArray = res;
        this.statArray = new MatTableDataSource(res)
        this.statArray.sort = this.sortes
        // console.log(this.statArray)
      })

  }

  ngAfterViewInit(): void {
    this.statArray.sort = this.sortes
  }

  createLink(heroId: number){
    return '../hero/' + heroId
  }

  findPictureURL(heroId:number){
    return this.heroStatServe.findPictureURL(heroId)
  }





}


export interface HeroStat{
  hero_id:number;
  picks:number;
  winwhenpicked:number;
  bans:number;
  losewhenpick:number;
  winrate:number;
  pickParticipation:number;
  banParticipation:number;
  pickbanParticipation:number;


}
