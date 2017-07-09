import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseService } from './services/firebase.service';
import { environment } from '../environments/environment';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayersComponent } from './components/players/players.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { TeamComponent } from './components/team/team.component';
import { TeamsComponent } from './components/teams/teams.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { GameComponent } from './components/game/game.component';
import { GamesComponent } from './components/games/games.component';
import { AddGameComponent } from './components/add-game/add-game.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { GameavailablilityComponent } from './components/gameavailablility/gameavailablility.component';
import { EditGameavailablilityComponent } from './components/edit-gameavailablility/edit-gameavailablility.component';

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'players', component:PlayersComponent},
  {path:'player/:id', component:PlayerComponent},
  {path:'add-player', component:AddPlayerComponent},
  {path:'edit-player/:id', component:EditPlayerComponent},
  {path:'teams', component:TeamsComponent},
  {path:'team/:id', component:TeamComponent},
  {path:'add-team', component:AddTeamComponent},
  {path:'edit-team/:id', component:EditTeamComponent},
  {path:'games', component:GamesComponent},
  {path:'game/:id', component:GameComponent},
  {path:'add-game', component:AddGameComponent},
  {path:'edit-game/:id', component:EditGameComponent},
  {path:'gameavailability/:id', component:GameavailablilityComponent},
  {path:'edit-gameavailability/:id/:id2', component:EditGameavailablilityComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PlayerComponent,
    PlayersComponent,
    AddPlayerComponent,
    EditPlayerComponent,
    TeamComponent,
    TeamsComponent,
    AddTeamComponent,
    EditTeamComponent,
    GameComponent,
    GamesComponent,
    AddGameComponent,
    EditGameComponent,
    GameavailablilityComponent,
    EditGameavailablilityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
