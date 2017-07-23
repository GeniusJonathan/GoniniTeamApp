import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  games: any;
  players: any = [];
  playerstats: any = [];
  statistics: any = [];
  leaderPoints: any = "";
  leaderFreethrowmade: any = "";
  leaderFreethrowattempted: any = "";
  leaderThreepointmade: any = "";
  leaderFouls: any = "";
  points: any = 0
  freethrowmade: any = 0
  freethrowattempted: any = 0
  threepointmade: any = 0
  fouls: any = 0
  wins: any = 0;
  losses: any = 0;


  constructor(
    public af: AngularFireAuth,
    public flashMessage: FlashMessagesService,
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.firebaseService.getGames().subscribe(games => {
      this.games = games;
      this.loadData();
    });
  }

  login() {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loadData() {
    for (let game of this.games) {
      var index = 0;

      if (game.score != "00-00") {
        if (game.won) {
          this.wins += 1;
        } else {
          this.losses += 1;
        }
      }

      for (let player of game.playerstats) {
        if (this.statistics[index]) {
          if (index == player.id) {
            this.statistics[index].points += player.points
            this.statistics[index].ftm += player.freethrowmade
            this.statistics[index].fta += player.freethrowattempted
            this.statistics[index].tpm += player.threepointmade
            this.statistics[index].fouls += player.fouls
          }
        } else {
          this.statistics[index] = {
            player: player.player,
            points: player.points,
            ftm: player.freethrowmade,
            fta: player.freethrowattempted,
            tpm: player.threepointmade,
            fouls: player.fouls

          }
        }
        index++;
      }
    }


    console.log(this.statistics);
    console.log(this.getPointsLeader());
    console.log(this.getFreethrowMadeLeader());
    console.log(this.getFreethrowAttemptedLeader());
    console.log(this.getThreepointLeader());
    console.log(this.getFoulsLeader());
  }

  getPointsLeader() {
    var highestScore = this.statistics[0].points;
    var player = 0;
    for (var i = 0; i < this.statistics.length; i++) {
      var currentScore = this.statistics[i].points;
      if (currentScore > highestScore) {
        highestScore = currentScore
        player = i;
      }
    }
    this.leaderPoints = this.statistics[player].player.firstname + " " + this.statistics[player].player.lastname;
    this.points = this.statistics[player].points;
    return this.statistics[player];
  }

  getFreethrowMadeLeader() {
    var highestScore = this.statistics[0].ftm;
    var player = 0;
    for (var i = 0; i < this.statistics.length; i++) {
      var currentScore = this.statistics[i].ftm;
      if (currentScore > highestScore) {
        highestScore = currentScore
        player = i;
      }
    }
    this.leaderFreethrowmade = this.statistics[player].player.firstname + " " + this.statistics[player].player.lastname;
    this.freethrowmade = this.statistics[player].ftm;
    return this.statistics[player];
  }

  getFreethrowAttemptedLeader() {
    var highestScore = this.statistics[0].fta;
    var player = 0;
    for (var i = 0; i < this.statistics.length; i++) {
      var currentScore = this.statistics[i].fta;
      if (currentScore > highestScore) {
        highestScore = currentScore
        player = i;
      }
    }
    this.leaderFreethrowattempted = this.statistics[player].player.firstname + " " + this.statistics[player].player.lastname;
    this.freethrowattempted = this.statistics[player].fta;
    return this.statistics[player];
  }

  getThreepointLeader() {
    var highestScore = this.statistics[0].tpm;
    var player = 0;
    for (var i = 0; i < this.statistics.length; i++) {
      var currentScore = this.statistics[i].tpm;
      if (currentScore > highestScore) {
        highestScore = currentScore
        player = i;
      }
    }
    this.leaderThreepointmade = this.statistics[player].player.firstname + " " + this.statistics[player].player.lastname;
    this.threepointmade = this.statistics[player].tpm;
    return this.statistics[player];
  }

  getFoulsLeader() {
    var highestScore = this.statistics[0].fouls;
    var player = 0;
    for (var i = 0; i < this.statistics.length; i++) {
      var currentScore = this.statistics[i].fouls;
      if (currentScore > highestScore) {
        highestScore = currentScore
        player = i;
      }
    }
    this.leaderFouls = this.statistics[player].player.firstname + " " + this.statistics[player].player.lastname;
    this.fouls = this.statistics[player].fouls;
    return this.statistics[player];
  }

  // static stats: any = [];
  // static getAllPlayerStats(games) {
  //   for (let game of games) {
  //     for (let playerstat of game.playerstats) {
  //       HomeComponent.stats.push(playerstat)
  //     }
  //   }
  // }

  // static playerss: any = [];
  // static getAllPlayers(players) {
  //   for (let player of players) {
  //     HomeComponent.playerss.push(player);
  //   }
  // }



}
