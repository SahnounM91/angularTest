import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartiesComponent } from './parties-component/parties-component.component';
import {HttpClientModule} from "@angular/common/http";
import { DetailsPartyComponentComponent } from './parties-component/details-party-component/details-party-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DoctorComponent } from './doctor-component/doctor-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DoctorMeetComponent } from './doctor-component/doctor-meet/doctor-meet.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PartiesComponent,
    DetailsPartyComponentComponent,
    DoctorComponent,
    DoctorMeetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ToastrModule.forRoot({timeOut: 2000}),
    BrowserAnimationsModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
