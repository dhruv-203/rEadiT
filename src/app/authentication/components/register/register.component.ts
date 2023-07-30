import { Component } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email: string = "";
  password: string = '';
  conPassword: string = "";
  username: string = "";
  state: any;
  isClosed = true
  constructor(private auth: AuthenticationService, private router: Router) { }
  register($event: any) {
    $event.preventDefault();
    if (this.username !== "" && this.email !== "" && this.password !== "" && this.conPassword !== "" && this.password === this.conPassword) {
      this.auth.registerWithEmailAndPassword(this.email, this.password).then((user) => {
        this.auth.updateProfile(user.user, this.username).then(() => this.router.navigateByUrl("/")).catch((error) => {
          this.isClosed = false
          this.state = { data: error.code }
        })
      }).catch((error) => {
        this.isClosed = false
        this.state = {
          data: error.code
        }
      })
    }
    else {
      this.isClosed = false
      if (this.username === "") {
        this.state = {
          data: "Username is required"
        }
      }
      else if (this.email === "") {
        this.state = {
          data: "Email is required"
        }
      }
      else if (this.password === "" || this.conPassword === "") {
        this.state = {
          data: "Both password feilds are required"
        }
      }
      else if (this.password !== this.conPassword) {
        this.state = {
          data: "Password doesn't match with Confirm Password"
        }
      }
    }
  }
  closeAlert() {
    this.isClosed = !this.isClosed
  }
}
