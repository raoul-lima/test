import { Component, OnInit } from '@angular/core';
//import { Taches } from '../models/taches';
import { TachesService } from '../services/taches.service';

@Component({
  selector: 'app-espace-user',
  templateUrl: './espace-user.component.html',
  styleUrls: ['./espace-user.component.css']
})
export class EspaceUserComponent implements OnInit {
  form: any = {
    task: null
  };

tache:any;
submitted = false;
isFinished:boolean=false;

  constructor(
    private tacheService: TachesService,
    ) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    const { task } = this.form;
    console.log(task);
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
  supprimer(){};
  editer(){};
  onChange(){}

}
