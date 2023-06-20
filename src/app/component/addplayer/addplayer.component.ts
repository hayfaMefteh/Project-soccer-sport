import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {
  playerForm: FormGroup;
  player :any={};
  id : any;
  title : string;
  constructor( private activatedRoute : ActivatedRoute ) { }

  ngOnInit() {
    this.id =this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      alert
    } else {
      
    }
  }

 
  addPlayer(){
console.log("here player object", this.player);

    
      }

}
