import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  name: any;
  address: any;
  city: any;
  postalcode: any;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let team = {
      name : this.name,
      address : this.address,
      city : this.city,
      postalcode : this.postalcode
    }
    this.firebaseService.addTeam(team);
    this.router.navigate(['/teams']);
  }
}
