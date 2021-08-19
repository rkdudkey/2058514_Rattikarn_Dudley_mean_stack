import { TestBed } from '@angular/core/testing';

import { TestMcqsService } from './test-mcqs.service';

describe('TestMcqsService', () => {
  let service: TestMcqsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestMcqsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
