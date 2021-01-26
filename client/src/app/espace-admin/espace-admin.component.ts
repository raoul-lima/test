import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';
import { TachesService } from '../services/taches.service';

@Component({
  selector: 'app-espace-admin',
  templateUrl: './espace-admin.component.html',
  styleUrls: ['./espace-admin.component.css']
})
export class EspaceAdminComponent implements OnInit {

  constructor(
    private activityService: ActivityService,
    private tacheService: TachesService) { }

  activity : any;
  ngOnInit(): void {
  }
  
  
  getAllActivity(){
    this.activityService.GetAllActivity()
    .subscribe((resultat) =>{
      console.log(resultat);
    })
  }
  getAllTache(){
    this.tacheService.getAllTache().subscribe(data =>{
      console.log(data);
    })
  }

  getallUsers(){
    
  }

}
