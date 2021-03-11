import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { IUser } from '../_models/IUser';
import { UserService } from '../_services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.css']
})

export class StartMenuComponent implements OnInit, OnDestroy {
  naytaLaake: boolean = false;
  userSubscription = new Subscription;
  users: IUser[];
  kayttaja: IUser;
  @Input() user: IUser;
  userFound: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userSubscription = this.userService.getUsers().subscribe(response => {
      this.users = response;
    })
  }

  getUser() {
    const userAsJSON = localStorage.getItem('user');
    this.users.forEach(element => { if (element.userName === JSON.parse(userAsJSON).username) { this.kayttaja = element; } });
    this.userFound = true;
  }

  ngDoCheck() {
    if (this.users!==undefined) {
      this.getUser();
    }
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  resetoiLaake() {
    this.naytaLaake = !this.naytaLaake;
  }

}
