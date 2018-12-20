import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StudyListComponent} from '../components/study-list/study-list.component';
import {WelcomePageComponent} from '../components/welcome-page/welcome-page.component';
import {UserEnvironmentComponent} from '../components/user-environment/user-environment.component';
import {AuthenticateGuard} from '../guards/authenticate.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: WelcomePageComponent},
  {
    path: 'environment',
    component: UserEnvironmentComponent,
    canActivate: [AuthenticateGuard],
    children: [
      {path: '', redirectTo: 'studies', pathMatch: 'full'},
      {path: 'studies', component: StudyListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthenticateGuard]
})
export class AppRoutingModule {
}
