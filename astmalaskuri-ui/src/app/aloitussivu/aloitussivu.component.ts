import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aloitussivu',
  templateUrl: './aloitussivu.component.html',
  styleUrls: ['./aloitussivu.component.css']
})
export class AloitussivuComponent implements OnInit {
  registerMode = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

  info() {
    this.router.navigateByUrl("/info");
  }

}
