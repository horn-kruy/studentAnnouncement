import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseActivity, CreateCourseActivityDto } from '../models/student-course-activity.model';

@Injectable({
  providedIn: 'root',
})
export class StudentCourseActivityService {
  private apiUrl = 'http://172.104.190.114/api/StudentCourseActivities';

  constructor(private http: HttpClient) {}

  // Get all course activities
  getCourseActivities(): Observable<CourseActivity[]> {
    return this.http.get<CourseActivity[]>(this.apiUrl);
  }

  // Get course activity by ID
  getCourseActivityById(id: number): Observable<CourseActivity> {
    return this.http.get<CourseActivity>(`${this.apiUrl}/${id}`);
  }

  // Create a new course activity
  createCourseActivity(courseActivity: CreateCourseActivityDto): Observable<CourseActivity> {
    return this.http.post<CourseActivity>(this.apiUrl, courseActivity);
  }

  // Update an existing course activity
  updateCourseActivity(id: number, courseActivity: CreateCourseActivityDto): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, courseActivity);
  }

  // Delete a course activity
  deleteCourseActivity(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
