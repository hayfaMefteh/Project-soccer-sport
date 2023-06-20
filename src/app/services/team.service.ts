import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private httpClient : HttpClient) { }
  //server destination address
teamURL:string="http://localhost:3000/api/teams";




getAllTeam(){
return this.httpClient.get(this.teamURL);
}

getTeamById(x){
  return this.httpClient.get(`${this.teamURL}/${x}`);
}

deleteTeam(y){
  return this.httpClient.delete(`${this.teamURL}/${y}`);
}

addTeam(teamObj){
  return this.httpClient.post(this.teamURL,teamObj);
}

editTeam(newTeam){

return this.httpClient.put(this.teamURL,newTeam);

}

}
