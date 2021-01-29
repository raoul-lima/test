import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: any;
  currenttest='john';

  constructor(
    private token: TokenService,
  ) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

  logout(): void {
    this.token.signOut();
    window.location.reload();
  }

}
