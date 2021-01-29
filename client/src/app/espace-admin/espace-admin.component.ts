import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';
import { TachesService } from '../services/taches.service';

@Component({
  selector: 'app-espace-admin',
  templateUrl: './espace-admin.component.html',
  styleUrls: ['./espace-admin.component.css']
})
export class EspaceAdminComponent implements OnInit {

  submitted = false;
  constructor(
    private activityService: ActivityService,
    private tacheService: TachesService) { }

  activity : any;
  form: any = {
  task: null
  };

  isFinished1:boolean=false;
  isFinished2:boolean=false;
  isFinished3:boolean=false;
  isFinished4:boolean=false;

  ngOnInit(): void {
    
  }

  onSubmit(){
   
  }
  
  getAllActivity(){
    this.activityService.GetAllActivity()
    .subscribe((resultat) =>{
      console.log(resultat,);
    })
  }
  getAllTache(){
    this.tacheService.getAllTache().subscribe(data =>{
      console.log(data);
    })
  }

  getallUsers(){
    
  }
  supprimer(){
    
  }
  onChange(){
    console.log(this.isFinished1)
  }
  editer(){

  }

}
