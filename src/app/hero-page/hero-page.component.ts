import { Component, OnInit } from '@angular/core';
import {Hero, HeroDataService} from "../stand-alone-services/heroData-service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {HeroStatsService} from "../hero-stats/hero-stats-service";

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css']
})
export class HeroPageComponent implements OnInit {

  routerId: number = 0;
  heroData: Hero
  bldurl:string

  constructor(private router:Router, private activeRoute: ActivatedRoute, private http: HttpClient, private heroStatServe:HeroStatsService, private heroDataService: HeroDataService) { }

  ngOnInit(): void {
    this.routerId = this.activeRoute.snapshot.params['heroID']
    this.heroData = this.heroDataService.getHeroes(this.routerId);
    if (this.heroData==undefined){
      this.router.navigate(['/heroStats'])
    }
    this.bldurl = 'https://steamcdn-a.akamaihd.net'+this.heroData.img
  }

}
