import { TestBed } from '@angular/core/testing';

import { GradeResolver } from './grade.resolver';

describe('GradeResolver', () => {
  let resolver: GradeResolver;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GradeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
