import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {
  hometeam: any;
  awayteam: any;
  date: any;
  time: any;
  details: string = "";
  playeravailability:any[] = [];
  playerstats:any[] = [];
  allTeams: any[];
  players:any[];
  score: any = "00-00";
  won:any = false;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.firebaseService.getTeams().subscribe(teams => {
      this.allTeams = teams;
    });
    this.firebaseService.getPlayers().subscribe(players => {
      this.players = players;
      AddGameComponent.setSubscribeData(players);
    });

    

  }

  onAddSubmit(){ 
    let index  = 0;
    for(let item of AddGameComponent.subscribeData ){
      let playerstats ={
        id: index,
        player: item,
        points: 0,
        fouls:0,
        freethrowmade: 0,
        freethrowattempted: 0,
        threepointmade:0,
        details: ""
      }
      let playeravailability ={
        id: index,
        player: item,
        available:false
      }
      this.playeravailability.push(playeravailability); 
      this.playerstats.push(playerstats); 
      index++;
    }
    index = 0;
    let game = {
      hometeam : this.hometeam,
      awayteam : this.awayteam,
      date : this.date,
      time : this.time,
      playeravailability: this.playeravailability,
      playerstats: this.playerstats,
      score: this.score,
      won: this.won,
      details : this.details
    }
    this.firebaseService.addGame(game);
    this.router.navigate(['/games']);
  }

  static subscribeData:any;
  static setSubscribeData(data){
    AddGameComponent.subscribeData=data;
  }

}
