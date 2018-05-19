import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getAuthors();
  }
  getAuthors(){
    return this._http.get('/authors')
  }
  newAuthor(author){
    return this._http.post('/authors', author)
  }
  updateAuthor(author){
    return this._http.put(`/authors/${author._id}`, author)
  }
  showAuthor(id){
    return this._http.get(`/authors/${id}`)
  }
  destroyAuthor(author){
    return this._http.delete(`/authors/${author._id}`)
  }
}

