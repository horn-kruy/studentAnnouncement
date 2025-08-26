import { Routes } from '@angular/router';

export const routes: Routes = [
  // When the user goes to http://.../announcements, load our component
  {
    path: 'announcements',
    loadComponent: () =>
      import('./features/student-announcements/announcement-list/announcement-list').then(
        (m) => m.AnnouncementListComponent
      ),
  },

  // If the user goes to the base URL, redirect them to /announcements
  {
    path: '',
    redirectTo: 'announcements',
    pathMatch: 'full',
  },
];
