import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  inValid: any;
  personalDetails: FormGroup;

  constructor(formBuild: FormBuilder) {
    this.inValid = false;
    this.personalDetails = formBuild.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern("^[a-zA-Z -']+"),
        ],
      ],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,99}/
          ),
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,99}/
          ),
        ],
      ],
    });
  }

  submit() {
    if (this.personalDetails.valid) {
      console.log(this.personalDetails);
    } else {
      this.inValid = true;
    }
    // console.log(this.personalDetails.value)
  }
}
