import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '../_models/IUser';
import { Subscription } from 'rxjs';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-kayttaja',
  templateUrl: './kayttaja.component.html',
  styleUrls: ['./kayttaja.component.css']
})
export class KayttajaComponent implements OnInit, OnDestroy, DoCheck {
  kayttaja: IUser;
  subscription: Subscription;
  users: IUser[];
  userSubscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userSubscription = this.userService.getUsers().subscribe(response => {
      this.users = response;
    })
  }

  ngDoCheck() {
    if (this.users!==undefined) {
      this.getUser();
    }
  }

  getUser() {
    const userAsJSON = localStorage.getItem('user');
    this.users.forEach(element => { if (element.userName === JSON.parse(userAsJSON).username) {
       this.kayttaja = element; } });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
