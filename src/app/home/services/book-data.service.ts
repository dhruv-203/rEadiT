import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) { }
  getTrendingBooks(): Observable<any> {
    return this.http.get<any>("https://openlibrary.org/trending/daily.json")
  }
  getSpecificBook(olid: string): Observable<any> {
    return this.http.get<any>(`https://openlibrary.org/api/books?bibkeys=OLID:${olid}&jscmd=data&format=json`)
  }

  getDescription(works: string): Observable<any> {
    return this.http.get<any>(`https://openlibrary.org${works}.json`)
  }

}
