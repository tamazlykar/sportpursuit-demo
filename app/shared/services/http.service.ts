import { Injectable } from '@angular/core';
import {
  Http,
  XHRBackend,
  RequestOptions,
  RequestOptionsArgs,
  Response
} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { CacheService } from './cache.service';

@Injectable()
export class HttpService extends Http {
  constructor(backend: XHRBackend, options: RequestOptions, private cache: CacheService) {
    super(backend, options);
   }

  public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.cache.get(url, super.get(url, options));
  }
}
