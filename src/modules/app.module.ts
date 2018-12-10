import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './material.module';
import {AppComponent} from '../components/app/app.component';
import {GlobalPanelComponent} from '../components/global-panel/global-panel.component';
import {MainContainerComponent} from '../components/main-container/main-container.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalPanelComponent,
    MainContainerComponent
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
