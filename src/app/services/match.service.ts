import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
//server destination address
matchURL:string="http://localhost:3000/api/matches";


  constructor(private httpClient : HttpClient ) { }

getAllMatch(){
return this.httpClient.get<{matches :any, message :string}>(this.matchURL)
}

getMatchById(x){
  return this.httpClient.get<{match :any}>(`${this.matchURL}/${x}`);
}

deleteMatch(y){
  return this.httpClient.delete(`${this.matchURL}/${y}`);
}

addMatch(matchObj){
  return this.httpClient.post(this.matchURL,matchObj);
}

editMatch(newMatch){

return this.httpClient.put(this.matchURL,newMatch);

}
search(result){
  return this.httpClient.post<{findedMatch : any, msg:string}>(`${this.matchURL}/searchMatches`,result);

}


}
