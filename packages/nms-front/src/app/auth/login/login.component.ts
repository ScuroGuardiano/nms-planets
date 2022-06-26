import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  username = '';
  password = '';
  error = '';
  loginPromise: Promise<any> | undefined;

  ngOnInit(): void {
  }

  login(event: Event) {
    event.preventDefault();
    this.error = "";
    this.loginPromise = this.authService.login(this.username, this.password);
    this.loginPromise
    .then(() => {
      this.router.navigateByUrl('/');
    })
    .catch(this.handleError.bind(this))
  }

  get loginDisabled() {
    return !this.username || !this.password;
  }

  private handleError(err: unknown) {
    console.error(err);
    this.loginPromise = undefined;
    if (err instanceof HttpErrorResponse) {
      switch(err.status) {
        case HttpStatusCode.Unauthorized:
          this.error = "Wrong username of password";
          break;
        default:
          this.error = err.statusText;
      }
    } else {
      this.error = (err as any).message ?? "Uknown error, check console."
    }
  }
}
