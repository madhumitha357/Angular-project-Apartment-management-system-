import { TestBed } from '@angular/core/testing';

import { SmartserviceService } from './smartservice.service';

describe('SmartserviceService', () => {
  let service: SmartserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
