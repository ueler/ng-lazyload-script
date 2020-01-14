import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgLazyloadScriptService {
  private readonly loadedLibraries: { [url: string]: ReplaySubject<{}> } = {};

  constructor() {
  }

  loadScript(url: string): Observable<{}> {
    if (this.loadedLibraries[url]) {
      return this.loadedLibraries[url].asObservable();
    }

    this.loadedLibraries[url] = new ReplaySubject();

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = () => {
      console.log('Lazy loaded script', url);
      this.loadedLibraries[url].next();
      this.loadedLibraries[url].complete();
    };
    script.onerror = () => {
      this.loadedLibraries[url].error('Could not load script ' + url);
      this.loadedLibraries[url].complete();
    };

    document.body.appendChild(script);

    return this.loadedLibraries[url].asObservable();
  }
}
