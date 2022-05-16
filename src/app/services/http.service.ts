import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { forkJoin, map, Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIResponse , Game } from '../models';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  getGameDetails(id: string) : Observable<Game>{
    const gameInfoRequest = this.http.get(`${env.BASE_URL}/games/${id}`);
    const gameTrailerRequest = this.http.get(`${env.BASE_URL}/games/${id}/movies`);
    const gameScreenShot = this.http.get(`${env.BASE_URL}/games/${id}/screenshots`);
    return forkJoin({
      gameInfoRequest,
      gameScreenShot,
      gameTrailerRequest,
    }).pipe(
      map((resp: any)=> {
        return {
          ...resp['gameInfoRequest'],
          screenshots: resp['gameScreenshot']?.results,
          trailers: resp['gameTrailerRequest']?.results,
        }
      })
    )
  }

  constructor(private http: HttpClient) { }
  getGameList(order:string , search?: string):Observable<APIResponse<Game>>  {
    let params = new HttpParams().set('order' , order);
    if(search){
      params = new HttpParams().set('order' , order).set('search' , search);
    }
    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`,{
      params:params
    })
  }
}
