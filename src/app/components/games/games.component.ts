import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games:any;  

  constructor(
    private firebaseService:FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.firebaseService.getGames().subscribe(games => {
       this.games = games;
     });
  }
  onDeleteClick(id){
    this.firebaseService.deleteGame(id);
    this.router.navigate(['/games']);
  }

}
