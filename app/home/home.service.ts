import { Injectable } from "@angular/core";
import { HttpService } from '../shared/services/http.service';
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { API_URL } from '../shared/config';
import { ITopSalesBanner, IFlashSaleItem, IBestseller } from './models';

@Injectable()
export class HomeService {
  private readonly topSalesBannersUrl = 'pages/home/1/32/';
  private readonly bestsellersUrl = 'products/bestsellers/1/123/20/GB/';
  private readonly getFlashSalesUrl = 'pages/home/1/32/';

  constructor(private http: HttpService) {}

  public getTopSalesBanners(): Observable<ITopSalesBanner[]> {
    return this.http.get(`${API_URL}${this.topSalesBannersUrl}`)
      .map(res => res.json())
      .map(data => data.topBanner)
      .catch(this.handleErrors);
  }

  public getBestsellers(): Observable<IBestseller[]> {
    return this.http.get(`${API_URL}${this.bestsellersUrl}`)
      .map(res => res.json())
      .catch(this.handleErrors);
  }

  public getFlashSales(): Observable<IFlashSaleItem[]> {
    return this.http.get(`${API_URL}${this.getFlashSalesUrl}`)
      .map(res => res.json())
      .map(data => data.featuredSales)
      .catch(this.handleErrors);
  }

  private handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));

    return Observable.throw(error);
  }
}
