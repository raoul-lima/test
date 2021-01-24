import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  activity : any;

  constructor(private activityService: ActivityService,) { }

  ngOnInit(): void {
  }

  
  getAllActivity(){
    this.activityService.GetAllActivity()
    .subscribe((resultat) =>{
      this.activity = resultat;
      console.log(resultat);
    })
  }

  getallUsers(){
    
  }

}
