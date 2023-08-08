import { TestBed } from '@angular/core/testing';

import { ToastCollectionService } from './toast-collection.service';

describe('ToastCollectionService', () => {
  let service: ToastCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
