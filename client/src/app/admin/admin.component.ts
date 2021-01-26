import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 

  constructor(private activityService: ActivityService,) { }

  ngOnInit(): void {
  }

}
