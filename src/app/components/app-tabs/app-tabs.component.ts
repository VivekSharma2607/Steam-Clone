import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models';

@Component({
  selector: 'app-app-tabs',
  templateUrl: './app-tabs.component.html',
  styleUrls: ['./app-tabs.component.scss']
})
export class AppTabsComponent implements OnInit {
  @Input() game: Game
  constructor() { }

  ngOnInit(): void {
  }

}
