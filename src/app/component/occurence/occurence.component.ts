import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-occurence',
  templateUrl: './occurence.component.html',
  styleUrls: ['./occurence.component.css']
})
export class OccurenceComponent implements OnInit {
  occurenceForm: FormGroup;
  occurence :any={};
  constructor() { }

  ngOnInit() {
  }
  
  nbOccurence(mot,lettre){

let nb =0;
for (let i = 0; i < mot.length; i++) {
  if (mot[i]== lettre) {
    nb =nb+1;
  }
  
  
}
return nb;



  }
}
