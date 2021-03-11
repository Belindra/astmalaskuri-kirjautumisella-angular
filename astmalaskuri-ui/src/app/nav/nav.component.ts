import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../_services/user.service';
import { Subscription } from 'rxjs';
import { IUser } from '../_models/IUser';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  model: any = {};
  users: IUser[];
  userSubscription = new Subscription;
  kayttaja: IUser;

  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService) { }


  ngOnInit(): void {
    this.userSubscription = this.userService.getUsers().subscribe(response => {
      this.users = response;
    })
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  login() {
    this.accountService.login(this.model).subscribe(() => {
      this.getUser();
      this.router.navigateByUrl('/kayttaja/' + this.model.username);
    }, error => {
      console.log(error);
      this.toastr.error(error.error);
    });
  }

  getUser() {
    const userAsJSON = localStorage.getItem('user');
    this.users.forEach(element => { if (element.userName === JSON.parse(userAsJSON).username) { this.kayttaja = element; } });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
