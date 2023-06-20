import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileURL:string="http://localhost:3000/api/profiles";
  constructor(private httpClient : HttpClient) { }

  getMatchById(x){
    return this.httpClient.get<{profile :any}>(`${this.profileURL}/${x}`);
  }
  
}
