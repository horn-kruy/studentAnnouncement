import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCourseActivities } from './student-course-activities';

describe('StudentCourseActivities', () => {
  let component: StudentCourseActivities;
  let fixture: ComponentFixture<StudentCourseActivities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentCourseActivities]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentCourseActivities);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
