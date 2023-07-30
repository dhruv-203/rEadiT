import { Component, OnInit } from '@angular/core';
import { BookDataService } from './services/book-data.service';
import { Router } from '@angular/router';
import { state } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private bookFetcher: BookDataService, private route: Router) {
  }
  tmp: Array<any> = []
  loader = true;
  ledger: { [key: string]: string } = {}
  ngOnInit(): void {
    this.loader = true
    this.bookFetcher.getTrendingBooks().subscribe(response => {
      for (let book of response.works) {
        let mp =
        {
          url: `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`,
          title: book.title,
          author_name: book.author_name,
          first_publish_year: book.first_publish_year,
          id: book.cover_edition_key,
          worksKey: book.key
        }
        this.tmp.push(mp)
        this.ledger[`${mp.id}`] = mp.worksKey
      }
      this.loader = false
      console.log(this.tmp)
    })
  }
  handleBookClick(event: Event) {
    const id: string = (event.currentTarget as HTMLElement).getAttribute("id")!
    // console.log(this.ledger[`${id}`])
    this.route.navigate([`/books/${id}`], { state: { worksKey: this.ledger[`${id}`] } })
  }

}
