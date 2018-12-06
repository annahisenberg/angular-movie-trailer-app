import { TestBed } from '@angular/core/testing';

import { ThemovieDBService } from './themovie-db.service';

describe('ThemovieDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemovieDBService = TestBed.get(ThemovieDBService);
    expect(service).toBeTruthy();
  });
});
