import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AthleteDataService } from '../service/athlete-data.service';
import { Address, AthleteData } from '../model/athlete-data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-athlete-creation',
  templateUrl: './athlete-creation.component.html',
})
export class AthleteCreationComponent {
  private athleteCreationSubscription: Subscription | undefined;
  constructor(private readonly athleteDataService: AthleteDataService) {}

  athleteForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl(''),
    title: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    age: new FormControl(''),
    gender: new FormControl(''),
    street: new FormControl('', [Validators.required]),
    addressAppendix: new FormControl(''),
    postCode: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', []),
    country: new FormControl('', [Validators.required]),
  });

  saveAthlete(): void {
    const athleteData: AthleteData = {
      title: this.athleteForm.controls.title.value,
      firstName: this.athleteForm.controls.firstName.value,
      lastName: this.athleteForm.controls.lastName.value,
      age: this.athleteForm.controls.age.value,
      gender: this.athleteForm.controls.gender.value,
      address: this.createAddress(),
      email: this.athleteForm.controls.email.value,
      phoneNumber: this.athleteForm.controls.phoneNumber.value,
    };

    this.athleteCreationSubscription = this.athleteDataService.createAthlete(athleteData).subscribe();
  }

  private createAddress(): Address {
    const street = this.athleteForm.controls.street.value;
    const addressAppendix = this.athleteForm.controls.addressAppendix.value;
    const postCode = this.athleteForm.controls.postCode.value;
    const city = this.athleteForm.controls.city.value;
    const state = this.athleteForm.controls.state.value;
    const country = this.athleteForm.controls.country.value;

    return {
      street: street,
      addressAppendix: addressAppendix,
      postCode: postCode,
      city: city,
      state: state,
      country: country,
    };
  }
}
