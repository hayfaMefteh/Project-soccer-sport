import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.css']
})
export class PlayerTableComponent implements OnInit {
  playerTab:any=[];
  constructor(private router:Router) { }

  ngOnInit() {
    this.playerTab=JSON.parse(localStorage.getItem("players")||"[]");

  }

  deletePlayer(selectedId){
    alert(selectedId);
    for (let i = 0; i < this.playerTab.length; i++) {
      if (this.playerTab[i].id==selectedId) {
        this.playerTab.splice(i,1);
        break;
        
      }
      localStorage.setItem("players",JSON.stringify( this.playerTab));
    }
      }
    
      info(x){
        localStorage.setItem("id",x);
        this.router.navigate(["playerInfo"]);
      }

}
