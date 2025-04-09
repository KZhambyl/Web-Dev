import { Routes } from '@angular/router';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { VacancyListComponent } from './components/vacancy-list/vacancy-list.component';

export const routes: Routes = [
    {path: '', component: CompanyListComponent},
    {path: 'company/:id', component: VacancyListComponent}
];
