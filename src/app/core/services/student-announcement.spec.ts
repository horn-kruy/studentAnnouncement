import { TestBed } from '@angular/core/testing';

import { StudentAnnouncement } from './student-announcement';

describe('StudentAnnouncement', () => {
  let service: StudentAnnouncement;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentAnnouncement);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
