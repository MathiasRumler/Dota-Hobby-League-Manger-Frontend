import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {BehaviorSubject, map, Observable, share, shareReplay, throwError} from "rxjs";
import {HeroStat} from "./hero-stats.component";

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

export class HeroStatsService{
  weakCache$: Observable<HeroStat[]>

  constructor(private http:HttpClient) {
  }

  getHeroStats() : Observable<HeroStat[]>{
    if (!this.weakCache$){
      this.weakCache$ = this.http.get('https://dotainhousebackend.herokuapp.com/api/v1/pickAndBanStats')
        .pipe(map(res => res as HeroStat[]), shareReplay(1))
    }
    return this.weakCache$
  }
}
