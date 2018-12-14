import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StudyListComponent} from '../components/study-list/study-list.component';
import {WelcomePageComponent} from '../components/welcome-page/welcome-page.component';

const routes: Routes = [
  {path: 'studies', component: StudyListComponent},
  {path: 'login', component: WelcomePageComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
