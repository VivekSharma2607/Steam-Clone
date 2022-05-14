import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public sort: string;
  public game: Array<Game>;
  private routeSub: Subscription;
  private gamesub: Subscription
  constructor(private httpService: HttpService, private router: Router, private activateRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.routeSub = this.activateRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchGames('metacrit', params['game-search']);
      } else {
        this.searchGames('metacrit');
      }
    })
  }
  searchGames(sort: string, search?: string): void {
    this.gamesub = this.httpService
      .getGameList(sort, search)
      .subscribe((gameList: APIResponse<Game>) => {
        this.game = gameList.results;
        console.log(gameList)
      })
  }
  openGameDetails(id: string): void {
    this.router.navigate(['details', id])
  }
  ngOnDestroy(): void {
    if (this.gamesub) {
      this.gamesub.unsubscribe()
    }

    if (this.routeSub) {
      this.routeSub.unsubscribe()
    }
  }
}
