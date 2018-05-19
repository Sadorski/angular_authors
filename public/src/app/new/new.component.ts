import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newAuthor: any;
  errors: null;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newAuthor = { name: "" }
  }
  createAuthor(){
    var author = this._httpService.newAuthor(this.newAuthor)
    author.subscribe(data =>  {
      if(data["message"] == "Success") {
        this.newAuthor = { name: "" } 
        this._router.navigate(["/"]);
      }
      else {
        this.errors = data["error"];
        console.log(this.errors)
      }
    })
  }
}
