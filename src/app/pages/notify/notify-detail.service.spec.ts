import { TestBed } from '@angular/core/testing';

import { NotifyDetailService } from './notify-detail.service';

describe('NotifyDetailService', () => {
  let service: NotifyDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifyDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
