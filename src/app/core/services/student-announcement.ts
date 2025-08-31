import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentAnnouncement, CreateAnnouncementDto } from '../models/student-announcement.model';

@Injectable({
  providedIn: 'root',
})
export class StudentAnnouncementService {
  private apiUrl = 'http://172.104.190.114/api/StudentAnnoucements';

  constructor(private http: HttpClient) {}

  getAnnouncements(): Observable<StudentAnnouncement[]> {
    return this.http.get<StudentAnnouncement[]>(this.apiUrl);
  }

  getAnnouncementById(id: number): Observable<StudentAnnouncement> {
    return this.http.get<StudentAnnouncement>(`${this.apiUrl}/${id}`);
  }

  createAnnouncement(announcement: CreateAnnouncementDto): Observable<StudentAnnouncement> {
    return this.http.post<StudentAnnouncement>(this.apiUrl, announcement);
  }

  updateAnnouncement(id: number, announcement: CreateAnnouncementDto): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, announcement);
  }

  deleteAnnouncement(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
