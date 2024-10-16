import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor( private httpclient:HttpClient) { }
  server_url = "http://localhost:4600";
  // login  admin
  adminAuthorization() {
  return this.httpclient.get(`${this.server_url}/user/1`)
  }
}
