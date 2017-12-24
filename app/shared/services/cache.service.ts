import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Rx';

interface ICacheContent {
  expiry: number;
  value: any;
}

/**
 * Cache Service is an observables based in-memory cache implementation
 * Keeps track of in-flight observables and sets a default expiry for cached values
 */
export class CacheService {
  private cache: Map<string, ICacheContent> = new Map<string, ICacheContent>();
  private inFlightObservables: Map<string, Subject<any>> = new Map<string, Subject<any>>();
  private readonly DEFAULT_MAX_AGE: number = 300000;

  public get(key: string, fallback?: Observable<any>, maxAge?: number): Observable<any> | Subject<any> {

    if (this.hasValidCachedValue(key)) {

      return Observable.of(this.cache.get(key).value);
    }

    if (!maxAge) {
      maxAge = this.DEFAULT_MAX_AGE;
    }

    if (this.inFlightObservables.has(key)) {
      return this.inFlightObservables.get(key);
    } else if (fallback && fallback instanceof Observable) {
      this.inFlightObservables.set(key, new Subject());

      return fallback.do((value) => { this.set(key, value, maxAge); });
    } else {
      return Observable.throw('Requested key is not available in Cache');
    }

  }

  private set(key: string, value: any, maxAge: number = this.DEFAULT_MAX_AGE): void {
    this.cache.set(key, { value, expiry: Date.now() + maxAge });
    this.notifyInFlightObservers(key, value);
  }

  private has(key: string): boolean {
    return this.cache.has(key);
  }

  private notifyInFlightObservers(key: string, value: any): void {
    if (this.inFlightObservables.has(key)) {
      const inFlight = this.inFlightObservables.get(key);
      const observersCount = inFlight.observers.length;
      if (observersCount) {
        inFlight.next(value);
      }
      inFlight.complete();
      this.inFlightObservables.delete(key);
    }
  }

  private hasValidCachedValue(key: string): boolean {
    if (this.cache.has(key)) {

      if (this.cache.get(key).expiry < Date.now()) {
        this.cache.delete(key);

        return false;
      }

      return true;
    } else {
      return false;
    }
  }
}
