import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players:any;

  constructor(
    private firebaseService:FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.firebaseService.getPlayers().subscribe(players => {
       this.players = players;
     });
  }
  onDeleteClick(id){
    this.firebaseService.deletePlayer(id);
    this.router.navigate(['/players']);
  }

}
