import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authForm: FormGroup;
  isSubmit = false;
  loginFail = false;

  constructor(private router: Router,
              private formBuilder: FormBuilder) {
    this.authForm = this.formBuilder.group  ({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit() {
  }

  signIn() {
    this.isSubmit = true;
    const data = this.authForm.value;
    console.log(data);
    console.log(data.username);
    console.log(data.password);
    if (data.username === 'admin' && data.password === 'admin') {
       this.router.navigateByUrl('/todoList');
    } else {
      this.loginFail = true;
      this.authForm.reset(this.authForm.value);
    }
  }
}
