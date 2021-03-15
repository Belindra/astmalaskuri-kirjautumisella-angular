import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-luo-kayttis',
  templateUrl: './luo-kayttis.component.html',
  styleUrls: ['./luo-kayttis.component.css']
})
export class LuoKayttisComponent implements OnInit {
  registrationForm: FormGroup;
  userSubmitted: boolean;
  @Output() cancelRegister = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private accountService: AccountService,
    private toastr: ToastrService) { }

  ngOnInit() {
     this.createRegistrationForm();
  }

  register() {
    this.userSubmitted = true;
    this.accountService.register(this.registrationForm.value).subscribe(() => {
      this.cancel();
    }, error => {
      console.log(error);
      this.toastr.error(error.error);
    });

    this.router.navigate(['/kayttaja/'+'']);
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

   createRegistrationForm() {
     this.registrationForm = this.fb.group({
       userName: ['', Validators.required],
       password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
       confirmPassword: ['', [Validators.required, this.matchValues('password')]]
     })
   }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value ? null : { isMatching: true }
    }
  }

  //getterit formcontrolleille, jotta ne saa vähemmällä koodilla käyttöön templatessa
   get userName() {
     return this.registrationForm.get('userName') as FormControl;
   }

   get password() {
     return this.registrationForm.get("password") as FormControl;
   }
   get confirmPassword() {
     return this.registrationForm.get("confirmPassword") as FormControl;
   }

  }
