import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    // { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'form', component: FormComponent },
    { path: 'about', component: AboutComponent },
    { path: 'user/:id/:name', component: UserComponent },
    { path: 'profile', component: ProfileComponent, data: { routeName: 'Django' } },
    { path: '**', component: PageNotFoundComponent }
];
