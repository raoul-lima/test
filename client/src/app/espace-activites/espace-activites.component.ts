import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-espace-activites',
  templateUrl: './espace-activites.component.html',
  styleUrls: ['./espace-activites.component.css']
})
export class EspaceActivitesComponent implements OnInit {

  activity:any;
  constructor(
    private activiteService: ActivityService
  ) { }

  ngOnInit(): void {
  }

  getAllActivity(){
    this.activiteService.GetAllActivity()
    .subscribe((resultat) =>{
      this.activity=resultat;
      console.log(resultat,);
    })
  }



}
