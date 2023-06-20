import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-addmatch',
  templateUrl: './addmatch.component.html',
  styleUrls: ['./addmatch.component.css']
})
export class AddmatchComponent implements OnInit {
  matchForm: FormGroup;
  match :any={};
  constructor(private matchService :MatchService) { }

  ngOnInit() {
  }
  addMatch(){
    console.log("here match object", this.match);
    this.matchService.addMatch(this.match).subscribe((response)=>{
      console.log("here response from BE", response);
      
    })
// let idMatch=JSON.parse(localStorage.getItem("matchId")||"1");
//     let matches=JSON.parse(localStorage.getItem("matches")||"[]");
//     this.match.id=idMatch;
//     matches.push(this.match);
//     localStorage.setItem("matches", JSON.stringify(matches));
//     localStorage.setItem("matchId", idMatch+1);

  }
}
