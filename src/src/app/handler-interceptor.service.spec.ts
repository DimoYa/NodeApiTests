import { TestBed, inject } from '@angular/core/testing';

import { HandlerInterceptorService } from './handler-interceptor.service';

describe('HandlerInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandlerInterceptorService]
    });
  });

  it('should be created', inject([HandlerInterceptorService], (service: HandlerInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
