import { Component, OnDestroy, OnInit, ViewChild, Input, DoCheck } from '@angular/core';
import { MedicineInfoService } from '../_services/medicine-info.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EventInfoService } from '../_services/event-info.service';
import { IEventInfo } from '../_models/IEventInfo';
import { MedicineEventService } from '../_services/medicine-event.service';
import { IUser } from '../_models/IUser';
import { IMedicineEvent } from '../_models/IMedicineEvent';


@Component({
  selector: 'app-annoksia-jaljella',
  templateUrl: './annoksia-jaljella.component.html',
  styleUrls: ['./annoksia-jaljella.component.css']
})
export class AnnoksiaJaljellaComponent implements OnInit, OnDestroy, DoCheck {
  flix: boolean = false;
  ven: boolean = false;
  flixotide: any = [];
  ventoline: any = [];
  subF = new Subscription;
  subV = new Subscription;
  userSub1 = new Subscription;
  userSub2 = new Subscription;
  eventInfo: IEventInfo;
  uportion = 0;
  @ViewChild('f') form: NgForm;
  medEvent1: IMedicineEvent;
  medEvent2: IMedicineEvent;
  changeDetected: boolean = false;
  @Input() user: IUser;

  constructor(
    public medicineInfoService: MedicineInfoService,
    private eventInfoService: EventInfoService,
    private toastr: ToastrService,
    public medEventService: MedicineEventService) { }

  ngOnDestroy(): void {
    this.subF.unsubscribe();
    this.subV.unsubscribe();
    this.userSub1.unsubscribe();
    this.userSub2.unsubscribe();
  }

  ngOnInit(): void {
    this.flixotideInfo();
    this.ventolineInfo();
  }

  ngDoCheck() {
    if (this.user !== undefined && this.changeDetected === false) {
      this.changeDetected = true;
      this.getUsedPortionsByIds();
    }
  }

  flixotideInfo() {
    this.subF = this.medicineInfoService.getFlixotide().subscribe(data => {
      this.flixotide = data;
    }, error => {
      console.log(error);
    });
  }

  ventolineInfo() {
    this.subV = this.medicineInfoService.getVentoline().subscribe(data => {
      this.ventoline = data;
    }, error => {
      console.log(error);
    });
  }

  getUsedPortionsByIds() {
    this.userSub1 = this.medEventService.getUsedPortionTotalsByUserIdFlixotide(this.user.userId).subscribe(data => {
      this.medEvent1 = data;
    });

    this.userSub2 = this.medEventService.getUsedPortionTotalsByUserIdVentoline(this.user.userId).subscribe(data => {
      this.medEvent2 = data;
    });
  }

  flixotideLaake() {
    this.flix = !this.flix;
    this.ven = false;
  }

  ventolineLaake() {
    this.ven = !this.ven;
    this.flix = false;
  }

  paivitaLaakkeet():void {
    if (this.flix) {

      this.eventInfo = {
        userId: this.user.userId,
        medicineId: 1,
        usedPortionNow: this.uportion,
      };
      this.eventInfoService.useFlixotide(this.eventInfo);
    } else if (this.ven) {
      this.eventInfo = {
        userId: this.user.userId,
        medicineId: 2,
        usedPortionNow: this.uportion

      };
      this.eventInfoService.useVentoline(this.eventInfo);
    }
    this.toastr.success("Käytetyt annokset päivitetty!");
    this.form.reset();

    setTimeout(function(){  location.reload(); }, 2000);
  }
}
