import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {
  hometeam: any;
  awayteam: any;
  date: any;
  time: any;
  score: any;
  won: any;
  details: string = "";
  id:any;
  allTeams: any[];

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getGameDetails(this.id).subscribe(game => {
      this.hometeam = game.hometeam;
      this.awayteam = game.awayteam;
      this.date = game.date;
      this.time = game.time;
      this.details = game.details;
      this.score = game.score;
      this.won = game.won;
    });

    //Populate Home&Team SelectBox
    this.firebaseService.getTeams().subscribe(teams => {
      this.allTeams = teams;
    });
  }

  onEditSubmit(){
    let game = {
      hometeam : this.hometeam,
      awayteam : this.awayteam,
      date : this.date,
      time : this.time,
      score : this.score,
      won : this.won,
      details : this.details
    }
    this.firebaseService.updateGame(this.id, game);
    this.router.navigate(['/games/']);
  }

}
