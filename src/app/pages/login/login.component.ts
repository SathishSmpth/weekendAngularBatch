import { Component ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  // @ViewChild("form",{static : false}) loginForm:NgForm;

  buttonState:any;
  // name:any;
  constructor(){
    // this.loginForm = {}
    // this.buttonState = true;

    // setTimeout(() => {
    //   this.buttonState = false
    // }, 5000);
  }

  // submit(){
  //   console.log(this.loginForm)

  // }

}
