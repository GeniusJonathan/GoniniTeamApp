import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-gamestats',
  templateUrl: './edit-gamestats.component.html',
  styleUrls: ['./edit-gamestats.component.css']
})
export class EditGamestatsComponent implements OnInit {
  id:any;
  id2:any;
  game:any;

  points:any = 0;
  freethrowmade:any = 0;
  freethrowattempted:any = 0;
  threepointmade:any = 0;
  fouls:any = 0;
  details:any = "";


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

    this.firebaseService.getPlayerStats(this.id,this.id2).subscribe(data => {
      this.points = data.points;
      this.freethrowmade = data.freethrowmade;
      this.freethrowattempted = data.freethrowattempted;
      this.threepointmade = data.threepointmade;
      this.fouls = data.fouls;
      this.details = data.details;
    }); 
  }

  onEditSubmit(){
    let playerstats = {
      points: this.points,
      freethrowmade: this.freethrowmade,
      freethrowattempted: this.freethrowattempted,
      threepointmade: this.threepointmade,
      fouls: this.fouls,
      details: this.details
    }
    this.firebaseService.updatePlayerStats(playerstats);
    this.router.navigate(['/gamestats/'+ this.id]);
  }

}
