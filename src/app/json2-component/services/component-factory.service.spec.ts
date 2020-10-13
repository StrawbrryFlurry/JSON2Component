import { TestBed } from '@angular/core/testing';

import { ComponentFactoryService } from './component-factory.service';

describe('ComponentFactoryService', () => {
  let service: ComponentFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
