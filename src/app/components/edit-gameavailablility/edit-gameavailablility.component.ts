import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-gameavailablility',
  templateUrl: './edit-gameavailablility.component.html',
  styleUrls: ['./edit-gameavailablility.component.css']
})
export class EditGameavailablilityComponent implements OnInit {
  game: any;
  time: any;
  available: any;
  player: any;
  playername: any = "Jonathan";

  id:any;
  id2:any;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.id2 = this.route.snapshot.params['id2'];
    
    this.firebaseService.getGameDetails(this.id).subscribe(game => {
      this.game = game.date + ": " + game.hometeam.name + " - " + game.awayteam.name;
    });
    this.firebaseService.getPlayerAvailability(this.id,this.id2).subscribe(data => {
      this.available = data.available;
      this.player = data.player;
    }); 
  }

  onEditSubmit(){
    this.firebaseService.updatePlayerAvailability(this.available);
    this.router.navigate(['/gameavailability/'+ this.id]);
  }
}
