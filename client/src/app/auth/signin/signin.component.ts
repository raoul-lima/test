import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  user: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private token: TokenService
    
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const { username, password } = this.form;
    console.log(username, password);
    this.authService.signIn(username, password).subscribe(
      (      data: { token: string; }) => {
        this.token.saveToken(data.token);
        this.token.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.user = this.token.getUser();
        if(this.user.isResp == true){
          this.router.navigateByUrl('signin');
        }
        this.reloadPage();
      },
      (      err: { error: { message: string; }; }) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  reloadPage() {
    window.location.reload();
  }

}
