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
  allTeams: any[];
  players:any[];

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
      let test ={
        id: index,
        player: item,
        available:false
      }
      this.playeravailability.push(test); 
      index++;
    }
    index = 0;
    let game = {
      hometeam : this.hometeam,
      awayteam : this.awayteam,
      date : this.date,
      time : this.time,
      playeravailability: this.playeravailability,
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
