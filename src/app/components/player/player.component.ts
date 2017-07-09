import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  id: any;
  player: any;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //Get Player details with id
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getPlayerDetails(this.id).subscribe(player =>{
      this.player = player;
    });
  }

  onDeleteClick(){
    this.firebaseService.deletePlayer(this.id);
    this.router.navigate(['/players']);
  }

}
