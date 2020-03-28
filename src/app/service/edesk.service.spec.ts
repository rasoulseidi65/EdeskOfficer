import { TestBed } from '@angular/core/testing';

import { EdeskService } from './edesk.service';

describe('EdeskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EdeskService = TestBed.get(EdeskService);
    expect(service).toBeTruthy();
  });
});
