import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import * as data from "./heroData.json";
// import heroDD from 'src/app/stand-alone-services/heroData.json';

export interface ehreNimmt{
  id:number;
  ehre:ehre;
}

export interface ehre{
  id:number;
  name:string;
}

@Injectable({
  providedIn:'root'
})

export class HeroDataService{

  // labben : ehreNimmt[] = data

  constructor(private http:HttpClient) {
  }

  public getJson() {
    // return this.http.get('app/stand-alone-services/heroData.json')
    //   .subscribe(res => console.log(res))

    // @ts-ignore
    console.log(data)


  }

}
