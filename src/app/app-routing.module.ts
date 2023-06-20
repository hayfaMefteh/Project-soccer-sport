import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';

import { MatchesComponent } from './component/matches/matches.component';
import { SingupComponent } from './component/singup/singup.component';
import { AddplayerComponent } from './component/addplayer/addplayer.component';
import { AddmatchComponent } from './component/addmatch/addmatch.component';
import { AddteamComponent } from './component/addteam/addteam.component';
import { PlayersComponent } from './component/players/players.component';
import { AdminComponent } from './component/admin/admin.component';
import { MatchInfoComponent } from './component/match-info/match-info.component';
import { PlayerInfoComponent } from './component/player-info/player-info.component';
import { TeamInfoComponent } from './component/team-info/team-info.component';
import { EditMatchComponent } from './component/edit-match/edit-match.component';
import { OccurenceComponent } from './component/occurence/occurence.component';
import { SearchComponent } from './component/search/search.component';
import { WeatherComponent } from './component/weather/weather.component';


const routes: Routes = [
  // http://localhost:4200/ => la page principale
{path:"",component:HomeComponent},
{path:"singin",component:LoginComponent},
{path:"subscription",component:SingupComponent},
{path:"addPlayer",component:AddplayerComponent},
{path:"addMatch",component:AddmatchComponent},
{path:"addTeam",component:AddteamComponent},
{path:"allMatches",component:MatchesComponent},
{path:"allPlayers",component:PlayersComponent},
{path:"admin",component:AdminComponent},
{path:"matchInfo",component:MatchInfoComponent},
{path:"playerInfo",component:PlayerInfoComponent},
{path:"teamInfo",component:TeamInfoComponent},
{path:"editMatch/:id",component:EditMatchComponent},
{path:"occurence",component:OccurenceComponent},
{path:"searchMatch",component:SearchComponent},
{path:"weather",component:WeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
