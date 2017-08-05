import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  id:any;
  name:any;
  address:any ="";  
  city:any ="";
  postalcode:any ="";  

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getTeamDetails(this.id).subscribe(team => {
      this.name = team.name;
      this.address = team.address;
      this.city = team.city;
      this.postalcode = team.postalcode;
    });
  }

  onEditSubmit(){
    let team = {
      name : this.name,
      address : this.address,
      city : this.city,
      postalcode : this.postalcode
    }
    this.firebaseService.updateTeam(this.id, team);
    this.router.navigate(['/team/'+ this.id]);
  }

}
