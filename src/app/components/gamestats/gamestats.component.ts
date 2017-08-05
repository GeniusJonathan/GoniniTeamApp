import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-gamestats',
  templateUrl: './gamestats.component.html',
  styleUrls: ['./gamestats.component.css']
})
export class GamestatsComponent implements OnInit {
  id: any;
  game: any;

  constructor(
    private firebaseService: FirebaseService,
    public afAuth: AngularFireAuth,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getGameDetails(this.id).subscribe(game =>{
      this.game = game;
    });
  }

}
