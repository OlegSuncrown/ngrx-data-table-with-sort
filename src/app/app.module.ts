import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootStoreModule } from './@ngrx/root-store.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RootStoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
