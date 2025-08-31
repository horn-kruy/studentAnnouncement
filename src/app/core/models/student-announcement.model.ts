// models/student-announcement.model.ts
export interface StudentAnnouncement {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  isActive: boolean;
}

export interface CreateAnnouncementDto {
  title: string;
  content: string;
  isActive: boolean;
}
