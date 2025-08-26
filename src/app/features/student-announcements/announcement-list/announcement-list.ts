import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

// CORRECTED IMPORTS:
// 1. Import the model from the model file
import { StudentAnnouncement } from '../../../core/models/student-announcement.model';
// 2. Import the service from the service file (path is now correct)
import { StudentAnnouncementService } from '../../../core/services/student-announcement';

@Component({
  selector: 'app-announcement-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './announcement-list.html',
  styleUrl: './announcement-list.css',
})
export class AnnouncementListComponent implements OnInit {
  public announcements$!: Observable<StudentAnnouncement[]>;

  constructor(private announcementService: StudentAnnouncementService) {}

  ngOnInit(): void {
    this.announcements$ = this.announcementService.getAnnouncements();
  }
}
