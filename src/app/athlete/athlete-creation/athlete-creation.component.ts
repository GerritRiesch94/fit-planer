import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AthleteDataService } from '../service/athlete-data.service';

@Component({
  selector: 'app-athlete-creation',
  templateUrl: './athlete-creation.component.html',
})
export class AthleteCreationComponent {
  constructor(private readonly athleteDataService: AthleteDataService) {}

  athleteForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required]),
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
    const address = this.createAddress();
    console.log('Address:', address);
  }

  private createAddress(): string {
    let street = this.athleteForm.controls.street.value;
    const addressAppendix = this.athleteForm.controls.addressAppendix.value;
    const postCode = this.athleteForm.controls.postCode.value;
    const city = this.athleteForm.controls.city.value;
    const state = this.athleteForm.controls.state.value;
    const country = this.athleteForm.controls.country.value;

    if (addressAppendix) {
      street = `${street}, ${addressAppendix}`;
    }

    if (state) {
      return `${street}, ${postCode} ${city}, ${state}, ${country}`;
    }

    return `${street}, ${postCode} ${city}, ${country}`;
  }
}
