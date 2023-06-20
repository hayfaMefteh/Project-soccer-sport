import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor() { }
players :any=[{name:"messi",nbr:30,position:"atk",img:""},
{name:"CR7",nbr:7,position:"atk",img:""}]
  ngOnInit() {
  }

}
