import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog'; //To be able to use Angular Material Dialog

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { HomeComponent } from './components/routes/home/home.component';
import { HistoryComponent } from './components/routes/history/history.component';
import { AccountComponent } from './components/routes/account/account.component';
import { ButtonComponent } from './components/utils/button/button.component';
import { TableComponent } from './components/utils/table/table.component';
import { ImageComponent } from './components/utils/image/image.component';
import { MapComponent } from './components/utils/map/map.component';
import { TextareaComponent } from './components/utils/textarea/textarea.component';
import { CommercialComponent } from './components/commerical/commercial/commercial.component';
import { LoginComponent } from './components/commerical/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HomeComponent,
    HistoryComponent,
    AccountComponent,
    ButtonComponent,
    TableComponent,
    ImageComponent,
    MapComponent,
    TextareaComponent,
    CommercialComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
