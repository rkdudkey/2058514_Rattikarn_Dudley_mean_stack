import { Injectable } from '@angular/core';
import { Test } from './test.model';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TestMcqsService {

  constructor(public http:HttpClient) { }

  getTestInfo():Observable<Test[]>{
    return this.http.get<Test[]>("/assets/test.json");
  }
}
