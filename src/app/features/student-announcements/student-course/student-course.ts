import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { StudentCourseService } from '../../../core/services/student-course';
import { StudentCourse, CreateStudentCourseDto } from '../../../core/models/student-course.model';

@Component({
  selector: 'app-student-course',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-course.html',
  styleUrls: ['./student-course.css']
})
export class StudentCourseComponent implements OnInit {
  courses$ = new BehaviorSubject<StudentCourse[]>([]);
  searchText: string = '';
  popupVisible: boolean = false;
  selectedCourse: CreateStudentCourseDto = { studentId: '', courseId: 0, enrollDate: '', lastVisited: '' };
  editingId: number | null = null;

  constructor(private courseService: StudentCourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getStudentCourses().subscribe(data => this.courses$.next(data));
  }

  openAddPopup() {
    this.resetForm();
    this.popupVisible = true;
  }

  saveCourse() {
    if (this.editingId !== null) {
      this.courseService.updateStudentCourse(this.editingId, this.selectedCourse)
        .subscribe(() => {
          this.loadCourses();
          this.closePopup();
        });
    } else {
      this.courseService.createStudentCourse(this.selectedCourse)
        .subscribe(() => {
          this.loadCourses();
          this.closePopup();
        });
    }
  }

  editCourse(course: StudentCourse) {
    this.selectedCourse = { 
      studentId: course.studentId,
      courseId: course.courseId,
      enrollDate: course.enrollDate,
      lastVisited: course.lastVisited || ''
    };
    this.editingId = course.id;
    this.popupVisible = true;
  }

  deleteCourse(id: number) {
    if (confirm('Are you sure you want to delete this course?')) {
      this.courseService.deleteStudentCourse(id).subscribe(() => this.loadCourses());
    }
  }

  resetForm() {
    this.selectedCourse = { studentId: '', courseId: 0, enrollDate: '', lastVisited: '' };
    this.editingId = null;
  }

  closePopup() {
    this.popupVisible = false;
    this.resetForm();
  }

  filteredCourses(data: StudentCourse[]): StudentCourse[] {
    if (!this.searchText) return data;
    return data.filter(c =>
      c.studentId.toLowerCase().includes(this.searchText.toLowerCase()) ||
      c.courseId.toString().includes(this.searchText)
    );
  }
}
