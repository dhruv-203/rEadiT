import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookDataService } from '../../services/book-data.service';
import { AuthenticationService } from 'src/app/authentication/service/authentication.service';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-detailed-book-page',
  templateUrl: './detailed-book-page.component.html',
  styleUrls: ['./detailed-book-page.component.css']
})
export class DetailedBookPageComponent implements OnInit {
  olid: string | null = ""
  data: any
  loader = true
  isAuthenticated = false
  displayName: string = ""
  user: any
  review: string = ""
  userData: any
  constructor(private route: ActivatedRoute, private bookFetcher: BookDataService, private router: Router, private authService: AuthenticationService, private fireStore: Firestore) {
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.olid = params.get('olid')
    })
    if (this.olid && this.olid !== "") {
      console.log(this.olid)
      this.bookFetcher.getSpecificBook(this.olid).subscribe(data => {
        this.data = data[`OLID:${this.olid}`]
        console.log(history.state)
        if (history.state.worksKey) {
          this.bookFetcher.getDescription(history.state.worksKey).subscribe(value => {
            if (value.description) {
              if (typeof value.description === "string") {
                this.data.description = value.description
              }
              else {
                this.data.description = value.description.value
              }
            }
            else {
              this.data.description = "The Description for this book doesn't exists"
            }
          })
        }
        if (this.data.subjects) {
          this.data.subjects = this.data.subjects.slice(0, 6)
        }
        if (this.data.subject_people) {
          this.data.subject_people = this.data.subject_people.slice(0, 6)
        }
        console.log(this.data)
        this.loader = false
      })
    }
    this.authService.getAuthState().subscribe(user => {
      if (user) {
        this.isAuthenticated = true;
        this.user = user
        console.log(user)
        this.getData()
        this.userData.subscribe((val: any) => console.log(val))
      }
      else {
        this.isAuthenticated = false
      }
    })
  }
  SubmitReview() {
    const collectionInstance = collection(this.fireStore, this.olid!)
    addDoc(collectionInstance, { user: { email: this.user.email, displayName: this.user.displayName }, data: this.review }).then(() => { console.log("Saved Successfully") }).catch((e) => { console.log(e.code) })
  }
  getData() {
    const collectionInstance = collection(this.fireStore, this.olid!)
    this.userData = collectionData(collectionInstance)
  }
}
