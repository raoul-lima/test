import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-espace-admin',
  templateUrl: './espace-admin.component.html',
  styleUrls: ['./espace-admin.component.css']
})
export class EspaceAdminComponent implements OnInit {

  submitted = false;
  constructor(
    private activityService: ActivityService,
    private userService: UserService) { }

  users:any;
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

  getUsers(){
    this.userService.getUserBoard()
    .subscribe((resultat)=>{
      this.users = resultat;
    })
  }
  suppActivity(/*id*/){
    //this.activityService.deleteActivity(id);
  }
  onChange(){
    console.log(this.isFinished1)
  }
  editer(){

  }

  supprimer(){
    
  }

}
