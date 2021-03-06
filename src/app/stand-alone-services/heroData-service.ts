import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import heroDD from 'src/assets/heroData.json';
import {conditionallyCreateMapObjectLiteral} from "@angular/compiler/src/render3/view/util";

export interface HeroRootObject{
  heroes?: Hero[];
}

export interface Hero{
  id?: number;
  name?: string;
  localized_name?: string;
  primary_attr?: string;
  attack_type?: attackType;
  roles?: string[];
  img?: string;
  icon?: string;
  base_health?: number;
  base_health_regen?: number;
  base_mana?: number;
  base_mana_regen?: number;
  base_armor?: number;
  base_mr?: number;
  base_attack_min?: number
  base_attack_max?: number;
  base_str?: number;
  base_agi?: number;
  base_int?: number;
  str_gain?: number;
  agi_gain?: number;
  int_gain?: number;
  attack_range?: number;
  projectile_speed?: number;
  attack_rate?: number;
  move_speed?: number;
  turn_rate?: number;
  cm_enabled?: boolean;
  legs?: number;
}

export enum attackType{
  Melee,
  Ranged
}

@Injectable({
  providedIn:'root'
})

export class HeroDataService{
  private heroes: Hero[] = [];

  constructor(private http: HttpClient) {
  }


  //You have to check for undifined
  getHeroes(heroID : number){
      // @ts-ignore
    console.log(heroDD[heroID])
    // @ts-ignore
    return heroDD[heroID] as Hero
  }


}




// this.http.get('../assets/heroData.json')
//   .subscribe((res: HeroRootObject) => res.heroes?.map(data => {
//     console.log(data);
//     console.log("PENIS");
//   }))
//
// this.http.get('../assets/heroData.json')
//   .subscribe((res: HeroRootObject) => console.log((res.heroes[1]))

// this.http.get('../assets/heroData.json')
//   .subscribe(res=> console.log(res))

// const heroidii:any = "16"
