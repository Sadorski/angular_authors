import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  authors=[];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAuthorsFromService();
  }
  getAuthorsFromService(){
    console.log('hello')
    this._httpService.getAuthors().subscribe(data => {
      console.log("Got data from post back", data);
      this.authors = data['data']
    })
  }
  deleteAuthor(author) {
    this._httpService.destroyAuthor(author).subscribe(data => {
      console.log("data")
    })
  }
}
