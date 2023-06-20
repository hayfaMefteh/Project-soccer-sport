import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  teamTab:any=[];
  // @Input() teamInput:any;
  constructor() { }

  ngOnInit() {
  }

}
