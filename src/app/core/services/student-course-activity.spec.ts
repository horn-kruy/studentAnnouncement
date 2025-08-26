import { TestBed } from '@angular/core/testing';

import { StudentCourseActivity } from './student-course-activity';

describe('StudentCourseActivity', () => {
  let service: StudentCourseActivity;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentCourseActivity);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
