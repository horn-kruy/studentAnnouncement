import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentCourseActivityService } from '../../../core/services/student-course-activity';
import { CourseActivity, CreateCourseActivityDto } from '../../../core/models/student-course-activity.model';

@Component({
  selector: 'app-student-course-activities',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-course-activities.html',
  styleUrls: ['./student-course-activities.css']
})
export class StudentCourseActivitiesComponent implements OnInit {
  activities: CourseActivity[] = [];
  searchText: string = '';
  popupVisible: boolean = false;
  editingId: number | null = null;
  selectedActivity: CreateCourseActivityDto = {
    courseId: 0,
    title: '',
    type: 'Assignment',
    dueDate: new Date().toISOString().substring(0,10),
    description: ''
  };

  activityTypes = ['Assignment', 'Quiz', 'Discussion'];

  constructor(private activityService: StudentCourseActivityService) { }

  ngOnInit(): void {
    this.loadActivities();
  }

  loadActivities(): void {
    this.activityService.getCourseActivities().subscribe(res => this.activities = res);
  }

  filteredActivities(): CourseActivity[] {
    return this.activities.filter(a =>
      a.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      a.description.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  openAddPopup(): void {
    this.editingId = null;
    this.selectedActivity = {
      courseId: 0,
      title: '',
      type: 'Assignment',
      dueDate: new Date().toISOString().substring(0,10),
      description: ''
    };
    this.popupVisible = true;
  }

  editActivity(activity: CourseActivity): void {
    this.editingId = activity.id;
    this.selectedActivity = {
      courseId: activity.courseId,
      title: activity.title,
      type: activity.type,
      dueDate: activity.dueDate.substring(0,10),
      description: activity.description
    };
    this.popupVisible = true;
  }

  saveActivity(): void {
    if (this.editingId) {
      this.activityService.updateCourseActivity(this.editingId, this.selectedActivity)
        .subscribe(() => this.loadActivities());
    } else {
      this.activityService.createCourseActivity(this.selectedActivity)
        .subscribe(() => this.loadActivities());
    }
    this.closePopup();
  }

  deleteActivity(id: number): void {
    if(confirm('Are you sure to delete this activity?')){
      this.activityService.deleteCourseActivity(id)
        .subscribe(() => this.loadActivities());
    }
  }

  closePopup(): void {
    this.popupVisible = false;
  }
}
