import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapse = true
  isHome = true
  isAuthenticated = false
  displayName = ""
  constructor(private router: Router, private authService: AuthenticationService) {

  }

  ngOnInit(): void {
    this.authService.getAuthState().subscribe(user => {
      if (user) {
        this.isAuthenticated = true;
        this.displayName = user.displayName!
      }
      else {
        this.isAuthenticated = false
      }
    })
    if (location.pathname === '/auth/login' || location.pathname === '/auth/register') {
      this.isHome = false
    }
    else {
      this.isHome = true
    }
  }

  onCollapse() {
    this.collapse = !this.collapse
  }

  signin() {
    this.router.navigateByUrl("/auth/login")

  }
  signup() {
    this.router.navigateByUrl("/auth/register")
  }
  logout() {
    console.log("saj")
    this.authService.logout()
  }
}
