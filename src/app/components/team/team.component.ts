import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  id: any;
  team: any;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //Get Team details with id
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getTeamDetails(this.id).subscribe(team => {
      this.team = team;
    });
  }

  onDeleteClick() {
    let result = confirm("Are you sure you want to delete?");
    if (result) {
      //Logic to delete the item
      this.firebaseService.deleteTeam(this.id);
      this.router.navigate(['/teams']);
    }
  }

}
