import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentAnnouncementService } from '../../../core/services/student-announcement';
import { StudentAnnouncement, CreateAnnouncementDto } from '../../../core/models/student-announcement.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-student-announcement',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './announcement-list.html',
  styleUrls: ['./announcement-list.css']
})
export class StudentAnnouncementComponent implements OnInit {
  announcements$ = new BehaviorSubject<StudentAnnouncement[]>([]);
  searchText: string = '';
  popupVisible: boolean = false;
  selectedAnnouncement: CreateAnnouncementDto = { title: '', content: '', isActive: true };
  editingId: number | null = null;

  constructor(private announcementService: StudentAnnouncementService) {}

  ngOnInit(): void {
    this.loadAnnouncements();
  }

  loadAnnouncements() {
    this.announcementService.getAnnouncements().subscribe(data => this.announcements$.next(data));
  }

  openAddPopup() {
    this.resetForm();
    this.popupVisible = true;
  }

  saveAnnouncement() {
    if (this.editingId !== null) {
      // Update
      this.announcementService.updateAnnouncement(this.editingId, this.selectedAnnouncement)
        .subscribe(() => {
          this.loadAnnouncements();
          this.closePopup();
        });
    } else {
      // Add
      this.announcementService.createAnnouncement(this.selectedAnnouncement)
        .subscribe(() => {
          this.loadAnnouncements();
          this.closePopup();
        });
    }
  }

  editAnnouncement(announcement: StudentAnnouncement) {
    this.selectedAnnouncement = { 
      title: announcement.title, 
      content: announcement.content, 
      isActive: announcement.isActive 
    };
    this.editingId = announcement.id;
    this.popupVisible = true;
  }

  deleteAnnouncement(id: number) {
    if (confirm('Are you sure you want to delete this announcement?')) {
      this.announcementService.deleteAnnouncement(id).subscribe(() => this.loadAnnouncements());
    }
  }

  resetForm() {
    this.selectedAnnouncement = { title: '', content: '', isActive: true };
    this.editingId = null;
  }

  closePopup() {
    this.popupVisible = false;
    this.resetForm();
  }

  filteredAnnouncements(data: StudentAnnouncement[]): StudentAnnouncement[] {
    if (!this.searchText) return data;
    return data.filter(a =>
      a.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      a.content.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
