import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
})
export class LoginComponent {
  profileForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(
    private router: Router,
  ) {}
  onSubmit(){  
    console.warn(this.profileForm.value);
    if (this.profileForm.value.email == "abc@gmail.com" && this.profileForm.value.password == "abc")
    {
      alert("you will navigate to next page");
      this.router.navigate(['/add']);
    }
  }
}
