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
isFinished1:boolean=false;
  isFinished2:boolean=false;
  isFinished3:boolean=false;
  isFinished4:boolean=false;

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
    const { task } = this.form;

    this.tacheService.createTache(task)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  supprimer(/*id:any*/){
    //this.tacheService.deleteTache(/*id:any*/);
  };
  editer(/*id:number, task:any*/){
    //this.tacheService.updateTache(id,task);
  };
  onChange(){}

}
