export interface StudentCourse {
  id: number;
  studentId: string;
  courseId: number;
  enrollDate: string; // ISO string format
  lastVisited?: string; // optional ISO string
}

export interface CreateStudentCourseDto {
  studentId: string;
  courseId: number;
  enrollDate: string; // ISO string format
  lastVisited?: string; // optional
}
