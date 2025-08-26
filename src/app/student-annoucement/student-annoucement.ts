import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Announcement {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  isActive: boolean;
}

@Component({
  selector: 'app-student-annoucement',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-annoucement.html',
  styleUrls: ['./student-annoucement.css']
})
export class StudentAnnoucement {
  announcement: Announcement = {
    id: null as any,
    title: '',
    content: '',
    createdAt: '',
    isActive: false
  };

  announcements: Announcement[] = [];
  isEditMode: boolean = false;

  saveAnnouncement() {
    if (this.isEditMode) {
      const index = this.announcements.findIndex(a => a.id === this.announcement.id);
      if (index !== -1) this.announcements[index] = { ...this.announcement };
      this.isEditMode = false;
    } else {
      const newId = this.announcements.length > 0 ? Math.max(...this.announcements.map(a => a.id)) + 1 : 1;
      this.announcements.unshift({ ...this.announcement, id: newId }); // Add to top (bump up)
    }
    this.resetAnnouncement();
  }

  editAnnouncement(a: Announcement) {
    this.announcement = { ...a };
    this.isEditMode = true;
  }

  deleteAnnouncement(a: Announcement) {
    this.announcements = this.announcements.filter(x => x.id !== a.id);
    if (this.announcement.id === a.id) this.resetAnnouncement();
  }

  resetAnnouncement() {
    this.announcement = {
      id: null as any,
      title: '',
      content: '',
      createdAt: '',
      isActive: false
    };
    this.isEditMode = false;
  }
}
