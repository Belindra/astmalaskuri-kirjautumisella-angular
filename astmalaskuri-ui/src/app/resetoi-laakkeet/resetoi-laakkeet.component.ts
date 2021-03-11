import { Component, DoCheck, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IMedicineEvent } from '../_models/IMedicineEvent';
import { IUser } from '../_models/IUser';
import { MedicineEventService } from '../_services/medicine-event.service';

@Component({
  selector: 'app-resetoi-laakkeet',
  templateUrl: './resetoi-laakkeet.component.html',
  styleUrls: ['./resetoi-laakkeet.component.css']
})
export class ResetoiLaakkeetComponent implements OnInit, DoCheck {
  @ViewChild('f') form: NgForm;
  medEvent: IMedicineEvent;
  changeDetected: boolean = false;
  @Input() user: IUser;


  constructor(private toastr: ToastrService, private medEventService: MedicineEventService) { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    if (this.user !== undefined && this.changeDetected === false) {
      this.changeDetected = true;
    }
  }

  resetoiFlixotide(): void {
    this.medEvent = {
      userId: this.user.userId,
      medicineId: 1,
      usedPortionTotal: 0
    };

    this.medEventService.resetFlixotideByUserId(this.medEvent);
    this.toastr.success("Flixotide resetoitu!");
    this.form.reset();

    setTimeout(function(){  location.reload(); }, 2000);
  }

  resetoiVentoline():void {
    this.medEvent = {
      userId: this.user.userId,
      medicineId: 2,
      usedPortionTotal: 0
    };

    this.medEventService.resetVentolineByUserId(this.medEvent);
    this.toastr.success("Ventoline resetoitu!");
    this.form.reset();

    setTimeout(function(){  location.reload(); }, 2000);
  }
}
