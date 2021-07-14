import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RootStoreModule } from './@ngrx/root-store.module';
import { ReactiveComponentModule } from '@ngrx/component';

// components
import { AppComponent } from './app.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    SpinnerComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RootStoreModule,
    HttpClientModule,
    ReactiveComponentModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
