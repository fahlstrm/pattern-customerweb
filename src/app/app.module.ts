import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Angular material module
import { MaterialModule } from './modules/material/material.module';

//Angular bootstarp for img-slider
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { HomeComponent } from './components/routes/home/home.component';
import { HistoryComponent } from './components/routes/history/history.component';
import { AccountComponent } from './components/routes/account/account.component';
import { MapComponent } from './components/utils/map/map.component';
import { TextareaComponent } from './components/utils/textarea/textarea.component';
import { CommercialComponent } from './components/commerical/commercial/commercial.component';
import { LoginComponent } from './components/commerical/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './components/utils/dialog/dialog.component';
import { HistoryTableComponent } from './components/tables/history-table/history-table.component';
import { LoginDialogComponent } from './components/utils/dialogs/login-dialog/login-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HomeComponent,
    HistoryComponent,
    AccountComponent,
    MapComponent,
    TextareaComponent,
    CommercialComponent,
    LoginComponent,
    DialogComponent,
    HistoryTableComponent,
    LoginDialogComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
