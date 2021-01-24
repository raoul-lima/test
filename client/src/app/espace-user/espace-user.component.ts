import { Component, OnInit } from '@angular/core';
//import { Taches } from '../models/taches';
import { TachesService } from '../services/taches.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-espace-user',
  templateUrl: './espace-user.component.html',
  styleUrls: ['./espace-user.component.css']
})
export class EspaceUserComponent implements OnInit {
currentUser: any;
tache:any;
submitted = false;

  constructor(
    private token: TokenService,
    private tacheService: TachesService
    ) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }


  createTache(): void {
    const data = {
      title: this.tache.libelle,
      description: this.tache.description
    };

    this.tacheService.createTache(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tache = {
      title: '',
      description: '',
      published: false
    };
  }

  logout(): void {
    this.token.signOut();
    window.location.reload();
  }
}
