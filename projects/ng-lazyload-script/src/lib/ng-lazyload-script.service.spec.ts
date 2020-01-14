import { TestBed } from '@angular/core/testing';

import { NgLazyloadScriptService } from './ng-lazyload-script.service';

describe('NgLazyScriptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgLazyloadScriptService = TestBed.get(NgLazyloadScriptService);
    expect(service).toBeTruthy();
  });
});
