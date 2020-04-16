import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirechatsComponent } from './components/firechats/firechats.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

//servicios
import {  FirestorechatsService } from "./servicios/firestorechats.service";
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FirechatsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [ FirestorechatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
