import { Routes } from '@angular/router';
import { ProblemList } from './pages/problem-list/problem-list';
import { HomePage } from './pages/home-page/home-page';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomePage,
    },
    {
        path: 'problems',
        component: ProblemList,
    }
    // {
    //     path: 'problem/:id',
    //     component: ProblemPage,
    // }
];
