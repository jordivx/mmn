import { Component, OnInit } from '@angular/core';
import { GameComponent } from '../game/game.component';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  private gameList:GameComponent[];
  private user1:UserComponent;
  private user2:UserComponent;

  constructor() { }

  ngOnInit() {
  }

}