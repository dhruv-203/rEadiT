import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = ""
  state: any;
  isClosed = true

  constructor(private auth: AuthenticationService, private router: Router) {
    this.state = this.router.getCurrentNavigation()?.extras.state
    if (this.state?.data && this.state.data.length > 0) {
      this.isClosed = false
    }
  }

  login() {
    this.auth.loginWithEmailAndPassword(this.email, this.password).then((user) => { this.router.navigateByUrl("") }).catch((error) => {
      this.state = { data: error.code }
      this.isClosed = false
    })
  }
  closeAlert() {
    this.isClosed = !this.isClosed
  }
}
