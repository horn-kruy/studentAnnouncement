import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCourseActivity } from './student-course-activity';

describe('StudentCourseActivity', () => {
  let component: StudentCourseActivity;
  let fixture: ComponentFixture<StudentCourseActivity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentCourseActivity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentCourseActivity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
