import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  players: FirebaseListObservable<any[]>;
  player: FirebaseObjectObservable<any>;
  teams: FirebaseListObservable<any[]>;
  team: FirebaseObjectObservable<any>;
  games: FirebaseListObservable<any[]>;
  game: FirebaseObjectObservable<any>;
  available : FirebaseObjectObservable<any>;
  stats : FirebaseObjectObservable<any>;

  constructor(private af: AngularFireDatabase) { 
    this.players = this.af.list('/players') as FirebaseListObservable<Player[]>;
    this.teams = this.af.list('/teams') as FirebaseListObservable<Team[]>;
    this.games = this.af.list('/games') as FirebaseListObservable<Game[]>;
  }

  //Players
  getPlayers(){
    return this.players;
  }

  getPlayerDetails(id){
    this.player = this.af.object('/players/'+ id) as FirebaseObjectObservable<Player>;
    return this.player;
  }

  addPlayer(player){
    let database = firebase.database().ref('players');
    return database.push(player);
  }

  updatePlayer(id, player){
    return this.players.update(id, player);
  }

  deletePlayer(id){
    this.players.remove(id);
  }

  getTeams(){
    return this.teams;
  }

  getTeamDetails(id){
    this.team = this.af.object('/teams/'+ id) as FirebaseObjectObservable<Team>;
    return this.team;
  }

  addTeam(team){
    let database = firebase.database().ref('teams');
    return database.push(team);
  }

  updateTeam(id, team){
    return this.teams.update(id, team);
  }

  deleteTeam(id){
    this.teams.remove(id);
  }

  getGames(){
    return this.games;
  }

  getGameDetails(id){
    this.game = this.af.object('/games/'+ id) as FirebaseObjectObservable<Game>;
    return this.game;
  }

  getPlayerAvailability(id,id2){
    this.available = this.af.object('/games/'+ id + '/playeravailability/' + id2) as FirebaseObjectObservable<PlayerAvailability>;
    return this.available;
  }

  getPlayerStats(id,id2){
    this.stats = this.af.object('/games/'+ id + '/playerstats/' + id2) as FirebaseObjectObservable<PlayerStats>;
    return this.stats;
  }
  addGame(game){
    let database = firebase.database().ref('games');
    return database.push(game);
  }
  updateGame(id, game){
    return this.games.update(id, game);
  }

  updatePlayerAvailability(value:boolean){
    return this.available.update({ available: value });
  }

  updatePlayerStats(stats){
    return this.stats.update(stats);
  }

  deleteGame(id){
    this.games.remove(id);
  }

}

interface Player{
  $key?: string;
  firstname?: string;
  lastname?: string
}

interface Team{
  $key?:string;
  name?:string;
  address?:string;
  city?:string;
  postalcode?:string;
}

interface Game{
  $key?:string;
  hometeam?:Team;
  awayteam?:Team;
  date?:string;
  time?:string;
  details?:string;
}

interface PlayerAvailability{
  $key?: string;
  available?:string;
  player?: Player;
}

interface PlayerStats{
  $key?: string;
  id:number;
  points?:number;
  fouls?:number;
  freethrowmade?:number;
  freethrowattempted?:number;
  threepointmade?:number;
  details?:string;
}

