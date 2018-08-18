import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';
import { User } from '../../models';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  registrationErrors: string[] = [];
  confirm: String = '';

  constructor(private readonly auth: AuthService, private readonly router: Router) { }

  ngOnInit() {
  }

  onSubmit(value: User) {
    this.auth.register(value).subscribe(user => {
      this.router.navigateByUrl('bikes');
    },
  error => this.registrationErrors = error.error);
  }

}
