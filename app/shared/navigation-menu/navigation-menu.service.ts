import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { API_URL } from '../config';
import { IMenuItem } from './models/menu-item';

@Injectable()
export class NavigationMenuService {
  private readonly navigationMenuUrl = 'category/navigation/5/1/';

  constructor(private http: Http) { }

  public getMenu() {
    return this.http.get(`${API_URL}${this.navigationMenuUrl}`)
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
      });
  }
}
