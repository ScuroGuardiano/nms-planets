import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  isLoggedIn$ = this.authService.user$.pipe(
    map(user => !!user)
  )

  title = 'nms-front';
}
