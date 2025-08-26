import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAnnoucement } from './student-annoucement';

describe('StudentAnnoucement', () => {
  let component: StudentAnnoucement;
  let fixture: ComponentFixture<StudentAnnoucement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentAnnoucement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAnnoucement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
