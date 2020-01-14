import { TestBed } from '@angular/core/testing';

import { NgLazyScriptService } from './ng-lazy-script.service';

describe('NgLazyScriptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgLazyScriptService = TestBed.get(NgLazyScriptService);
    expect(service).toBeTruthy();
  });
});
