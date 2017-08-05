import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: any;

  constructor(
    public afAuth: AngularFireAuth,
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.firebaseService.getTeams().subscribe(teams => {
      this.teams = teams;
    });
  }

  onDeleteClick(id) {
    let result = confirm("Are you sure you want to delete?");
    if (result) {
      //Logic to delete the item
      this.firebaseService.deleteTeam(id);
      this.router.navigate(['/teams']);
    }
  }

}
