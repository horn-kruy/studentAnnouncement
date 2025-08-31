// import { Routes } from '@angular/router';

// export const routes: Routes = [
//   {
//     path: '',
//     loadComponent: () =>
//       import('./features/dashboard/dashboard').then(m => m.DashboardComponent),
//     children: [
//       { path: '', redirectTo: 'announcements', pathMatch: 'full' },
//       {
//         path: 'announcements',
//         loadComponent: () =>
//           import('./features/student-announcements/announcement-list/announcement-list')
//             .then(m => m.StudentAnnouncementComponent)
//       },
//       {
//         path: 'activities',
//         loadComponent: () =>
//           import('./features/student-announcements/student-course-activities/student-course-activities')
//             .then(m => m.StudentCourseActivitiesComponent)
//       },
//       // {
//       //   path: 'courses',
//       //   loadComponent: () =>
//       //     import('./features/student-courses/course-list/course-list.component').then((m) => m.CourseListComponent),
//       // }
//     ]
//   }
// ];
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/dashboard/dashboard').then(m => m.DashboardComponent),
    children: [
      { path: '', redirectTo: 'announcements', pathMatch: 'full' },
      {
        path: 'announcements',
        loadComponent: () =>
          import('./features/student-announcements/announcement-list/announcement-list')
            .then(m => m.StudentAnnouncementComponent)
      },
      {
        path: 'activities',
        loadComponent: () =>
          import('./features/student-announcements/student-course-activities/student-course-activities')
            .then(m => m.StudentCourseActivitiesComponent)
      },
      {
        path: 'courses',
        loadComponent: () =>
          import('./features/student-announcements/student-course/student-course')
            .then(m => m.StudentCourseComponent)
      }
    ]
  }
];


