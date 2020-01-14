import {Inject, Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NgLazyScriptService {
  private readonly loadedLibraries: { [url: string]: ReplaySubject<{}> } = {};

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
  }

  loadScript(url: string): Observable<{}> {
    if (this.loadedLibraries[url]) {
      return this.loadedLibraries[url].asObservable();
    }

    this.loadedLibraries[url] = new ReplaySubject();

    const script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = () => {
      console.log('Lazy loaded script', url);
      this.loadedLibraries[url].next();
      this.loadedLibraries[url].complete();
    };

    this.document.body.appendChild(script);

    return this.loadedLibraries[url].asObservable();
  }
}
