import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from 'src/app/_models';
import { UserService, AuthenticationService } from 'src/app/_services';

@Component({
  selector: 'app-messageperso',
  templateUrl: './messageperso.component.html',
  styleUrls: ['./messageperso.component.css']
})
export class MessagepersoComponent implements OnInit {
  currentUser: User;
  userFromApi: User;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
      this.userFromApi = user;
    });
  }
}
