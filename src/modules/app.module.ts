import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './material.module';
import {AppComponent} from '../components/app/app.component';
import {UserPanelComponent} from '../components/user-panel/user-panel.component';
import {MainContainerComponent} from '../components/main-container/main-container.component';
import {HeaderComponent} from '../components/header/header.component';
import {ToolsPanelComponent} from '../components/tools-panel/tools-panel.component';
import {WorkspaceManagerComponent} from '../components/workspace-manager/workspace-manager.component';
import {StudyListComponent} from '../components/study-list/study-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPanelComponent,
    MainContainerComponent,
    HeaderComponent,
    ToolsPanelComponent,
    WorkspaceManagerComponent,
    StudyListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
