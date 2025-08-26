import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./student-annoucement/student-annoucement').then((m) => m.StudentAnnoucement),
    }
];
