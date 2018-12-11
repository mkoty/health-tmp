import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StudyListComponent} from '../components/study-list/study-list.component';

const routes: Routes = [
  {path: 'studies', component: StudyListComponent},
  {path: '', redirectTo: '/studies', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
