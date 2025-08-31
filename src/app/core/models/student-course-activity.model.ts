export interface CourseActivity {
  id: number;
  courseId: number;
  title: string;
  type: 'Assignment' | 'Quiz' | 'Discussion';
  dueDate: string; // ISO string
  description: string;
}

export interface CreateCourseActivityDto {
  courseId: number;
  title: string;
  type: 'Assignment' | 'Quiz' | 'Discussion';
  dueDate: string; // ISO string
  description: string;
}
