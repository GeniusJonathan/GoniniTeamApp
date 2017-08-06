import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-gameavailablility',
  templateUrl: './gameavailablility.component.html',
  styleUrls: ['./gameavailablility.component.css']
})
export class GameavailablilityComponent implements OnInit {
  id: any;
  game: any;
  players: any;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getPlayers().subscribe(players => {
       this.players = players;
     });

    this.firebaseService.getGameDetails(this.id).subscribe(game =>{
      this.game = game;
    });

  }
}
