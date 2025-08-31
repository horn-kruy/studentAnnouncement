import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentCourse, CreateStudentCourseDto } from '../models/student-course.model';

@Injectable({
  providedIn: 'root',
})
export class StudentCourseService {
  private apiUrl = 'http://your-api-url/api/StudentCoursesStudent';

  constructor(private http: HttpClient) {}

  // GET all student courses
  getStudentCourses(): Observable<StudentCourse[]> {
    return this.http.get<StudentCourse[]>(this.apiUrl);
  }

  // GET a student course by ID
  getStudentCourseById(id: number): Observable<StudentCourse> {
    return this.http.get<StudentCourse>(`${this.apiUrl}/${id}`);
  }

  // POST a new student course
  createStudentCourse(course: CreateStudentCourseDto): Observable<StudentCourse> {
    return this.http.post<StudentCourse>(this.apiUrl, course);
  }

  // PUT to update a student course
  updateStudentCourse(id: number, course: CreateStudentCourseDto): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, course);
  }

  // DELETE a student course
  deleteStudentCourse(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
