import { TestBed } from '@angular/core/testing';

import { NotifyHeaderService } from './notify-header.service';

describe('NotifyHeaderService', () => {
  let service: NotifyHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifyHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
