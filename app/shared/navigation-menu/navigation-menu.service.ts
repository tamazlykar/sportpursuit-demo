import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { API_URL } from '../config';
import { IMenuItem } from './models/menu-item';

@Injectable()
export class NavigationMenuService {
  private readonly navigationMenuUrl = 'category/navigation/5/1/';

  constructor(private http: HttpService) { }

  public getMenu() {
    return this.http.get(`${API_URL}${this.navigationMenuUrl}`)
      .map(res => res.json())
      .catch(this.handleErrors);
  }

  private handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));

    return Observable.throw(error);
  }
}
