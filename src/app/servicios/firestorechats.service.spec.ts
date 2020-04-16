import { TestBed } from '@angular/core/testing';

import { FirestorechatsService } from './firestorechats.service';

describe('FirestorechatsService', () => {
  let service: FirestorechatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestorechatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
