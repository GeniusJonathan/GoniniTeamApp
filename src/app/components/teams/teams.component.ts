import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams:any;

  constructor(
    private firebaseService:FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.firebaseService.getTeams().subscribe(teams => {
       this.teams = teams;
     });
  }
  onDeleteClick(id){
    this.firebaseService.deleteTeam(id);
    this.router.navigate(['/teams']);
  }

}
