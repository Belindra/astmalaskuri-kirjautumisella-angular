import { Component, Input, OnDestroy, OnInit, ViewChild, DoCheck } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IEventInfo } from '../_models/IEventInfo';
import { IUser } from '../_models/IUser';
import { EventInfoService } from '../_services/event-info.service';


@Component({
  selector: 'app-viimeksi-kaytetyt',
  templateUrl: './viimeksi-kaytetyt.component.html',
  styleUrls: ['./viimeksi-kaytetyt.component.css']
})
export class ViimeksiKaytetytComponent implements OnInit, OnDestroy, DoCheck {
  @ViewChild('f') form: NgForm;
  FVikaKaytto: IEventInfo;
  VVikaKaytto: IEventInfo;
  sub = new Subscription;
  FlixotideKaytot: IEventInfo[] = [];
  VentolineKaytot: IEventInfo[] = [];
  @Input() user: IUser;
  changeDetected: boolean = false;

  constructor(private eventInfoService: EventInfoService) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngDoCheck() {
    if (this.user !== undefined && this.changeDetected === false) {
      this.changeDetected = true;
      this.getMedUseEvents();
    }
  }

  ngOnInit() {
  }

  getMedUseEvents() {
    //haetaan käyttötapahtumat ja lääkkeen id:n perusteella laitetaan Ventoline- ja Flixotide -käyttötapahtumuksi
    this.sub = this.eventInfoService.getMedUseEvents().subscribe(
      (tapahtuma) => { tapahtuma.forEach(t => {if (t.userId === this.user.userId && t.medicineId===1) {this.FlixotideKaytot.push(t);}
    else if (t.userId === this.user.userId && t.medicineId===2) {this.VentolineKaytot.push(t);} } )

    this.FVikaKaytto = this.FlixotideKaytot[this.FlixotideKaytot.length-1];
    this.VVikaKaytto = this.VentolineKaytot[this.VentolineKaytot.length-1];

  }, error => {
    console.log(error);
  });
  }

  getVikaFlixKaytto():string {
    if(this.FVikaKaytto.usedPortionNow ===1) {
      return "1 annos";
    } else {
      return this.FVikaKaytto.usedPortionNow.toString() + " annosta";
    }
  }

  getVikaVenKaytto():string {
    if(this.VVikaKaytto.usedPortionNow ===1) {
      return "1 annos";
    } else {
      return this.VVikaKaytto.usedPortionNow.toString() + " annosta";
    }
  }

}

