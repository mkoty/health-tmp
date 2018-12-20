import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './material.module';
import {AppComponent} from '../components/app/app.component';
import {UserPanelComponent} from '../components/user-panel/user-panel.component';
import {MainContainerComponent} from '../components/main-container/main-container.component';
import {HeaderComponent} from '../components/header/header.component';
import {ToolsPanelComponent} from '../components/tools-panel/tools-panel.component';
import {WorkspaceManagerComponent} from '../components/workspace-manager/workspace-manager.component';
import {StudyListComponent} from '../components/study-list/study-list.component';
import {StudyCardComponent} from '../components/study-card/study-card.component';
import {WelcomePageComponent} from '../components/welcome-page/welcome-page.component';
import {UserEnvironmentComponent} from '../components/user-environment/user-environment.component';

import {AuthenticateService} from '../services/authenticate.service';
import {StudiesService} from '../services/studies.service';

@NgModule({
  declarations: [
    AppComponent,
    UserPanelComponent,
    MainContainerComponent,
    HeaderComponent,
    ToolsPanelComponent,
    WorkspaceManagerComponent,
    StudyListComponent,
    StudyCardComponent,
    WelcomePageComponent,
    UserEnvironmentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthenticateService, multi: true},
    StudiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
