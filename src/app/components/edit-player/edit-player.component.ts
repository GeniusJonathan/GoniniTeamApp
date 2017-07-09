import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  id:any;
  firstname:any;
  lastname:any;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getPlayerDetails(this.id).subscribe(player => {
      this.firstname = player.firstname;
      this.lastname = player.lastname;
    });
  }

  onEditSubmit(){
    let player = {
      firstname : this.firstname,
      lastname : this.lastname
    }
    this.firebaseService.updatePlayer(this.id, player);
    this.router.navigate(['/player/'+ this.id]);
  }

}
