import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  id: any;
  game: any;
  teams: any;
  address: any;
  city: any;
  postalcode: any;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //Get Game details with id
    this.id = this.route.snapshot.params['id'];
    
    this.firebaseService.getTeams().subscribe(teams => {
      this.teams = teams;
    })

    this.firebaseService.getGameDetails(this.id).subscribe(game =>{
      this.game = game;
      this.getTeamAddressByName(game.hometeam.name);
    });
  }

  onDeleteClick(){
    var result = confirm("Are you sure?");
    this.firebaseService.deleteGame(this.id);
    this.router.navigate(['/games']);
  }

  testmethod(){
    console.log("hallo");
  }

  getTeamAddressByName(teamname){
    for (let team of this.teams){
      if(team.name == teamname ){
        this.address = team.address;
        this.city = team.city;
        this.postalcode = team.postalcode;
        return;
      }
    }
  }
  
}
