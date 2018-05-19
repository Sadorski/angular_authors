import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author: any;
  errors: null;

  constructor(private _httpService: HttpService, private activeRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit() {

    //     this._route.params.subscribe((params: Params) => console.log(params['id']));

    this.activeRoute.params.subscribe((queryParams) => {
      console.log(queryParams['id'])
      this.getAuthor(queryParams['id'])
    });
  }
  getAuthor(id){
    let observable = this._httpService.showAuthor(id)
    observable.subscribe(data=> {
      console.log(data)
      this.author = data['data']
    })
  }
  updateAuthor(){
    let observable = this._httpService.updateAuthor(this.author);
    observable.subscribe(data => {
      if(data["message"] == "Success") {
        this._router.navigate(["/"]);
      }
      else {
        this.errors = data["error"];
        console.log(this.errors)
      }
    })
  }

}
