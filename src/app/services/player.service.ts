import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private httpClient : HttpClient) { }
   //server destination address
playerURL:string="http://localhost:3000/api/players";


addPlayer(playerObj){
  return this.httpClient.post<{msg: string}>(this.playerURL,playerObj);
} 

getAllPlayer(){
return this.httpClient.get<{playerTab: any}>(this.playerURL);
}

getPlayerById(id){
  return this.httpClient.get<{player: string}>(`${this.playerURL}/${id}`);
}

editPlayer(newPlayer){

  return this.httpClient.put<{msg: string}>(this.playerURL,newPlayer);
  
  }
deletePlayer(y){
  return this.httpClient.delete(`${this.playerURL}/${y}`);
}
 



}
