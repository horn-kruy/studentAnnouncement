import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Import the model from the models folder
import { StudentAnnouncement } from '../models/student-announcement.model';

@Injectable({
  providedIn: 'root',
})
export class StudentAnnouncementService {
  private apiUrl = '/api/StudentAnnouncements';

  constructor(private http: HttpClient) {}

  getAnnouncements(): Observable<StudentAnnouncement[]> {
    return this.http.get<StudentAnnouncement[]>(this.apiUrl);
  }

  getAnnouncementById(id: number): Observable<StudentAnnouncement> {
    return this.http.get<StudentAnnouncement>(`${this.apiUrl}/${id}`);
  }

  createAnnouncement(announcement: StudentAnnouncement): Observable<StudentAnnouncement> {
    return this.http.post<StudentAnnouncement>(this.apiUrl, announcement);
  }

  updateAnnouncement(id: number, announcement: StudentAnnouncement): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, announcement);
  }

  deleteAnnouncement(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
