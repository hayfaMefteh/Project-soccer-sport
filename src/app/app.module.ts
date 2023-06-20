import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CupWorldComponent } from './component/cup-world/cup-world.component';
import { ResultComponent } from './component/result/result.component';
import { NewsComponent } from './component/news/news.component';
import { StatsComponent } from './component/stats/stats.component';
import { BlogComponent } from './component/blog/blog.component';
import { InfoComponent } from './component/info/info.component';
import { ArticlComponent } from './component/articl/articl.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MatchesComponent } from './component/matches/matches.component';
import { AddmatchComponent } from './component/addmatch/addmatch.component';
import { AddteamComponent } from './component/addteam/addteam.component';
import { AddplayerComponent } from './component/addplayer/addplayer.component';
import { SingupComponent } from './component/singup/singup.component';
import { PlayersComponent } from './component/players/players.component';
import { PlayerComponent } from './component/player/player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './component/admin/admin.component';
import { TeamTableComponent } from './component/team-table/team-table.component';
import { MatchTableComponent } from './component/match-table/match-table.component';
import { PlayerTableComponent } from './component/player-table/player-table.component';
import { MatchInfoComponent } from './component/match-info/match-info.component';
import { TeamInfoComponent } from './component/team-info/team-info.component';
import { PlayerInfoComponent } from './component/player-info/player-info.component';
import { EditMatchComponent } from './component/edit-match/edit-match.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { SearchComponent } from './component/search/search.component';
import { HttpClientModule } from "@angular/common/http";
import { OccurenceComponent } from './component/occurence/occurence.component';
import { WeatherComponent } from './component/weather/weather.component';
import { CdComponent } from './component/weather../cd/cd.component';
import { MyfilterPipe } from './pipes/myfilter.pipe';
import { ProfileComponent } from './component/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CupWorldComponent,
    ResultComponent,
    NewsComponent,
    StatsComponent,
    BlogComponent,
    InfoComponent,
    ArticlComponent,
    HomeComponent,
    LoginComponent,

    MatchesComponent,

    AddmatchComponent,

    AddteamComponent,

    AddplayerComponent,

    SingupComponent,

    PlayersComponent,

    PlayerComponent,

    AdminComponent,

    TeamTableComponent,

    MatchTableComponent,

    PlayerTableComponent,

    MatchInfoComponent,

    TeamInfoComponent,

    PlayerInfoComponent,

    EditMatchComponent,

    AsterixPipe,

    SearchComponent,

    OccurenceComponent,

    WeatherComponent,

    CdComponent,

    MyfilterPipe,

    ProfileComponent

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
