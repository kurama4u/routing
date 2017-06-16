import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { MemberComponent } from './member/member.component';
import { RouterModule, Routes } from '@angular/router'
import { CountriesService } from './countries.http.service';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { ProfileService } from './profile.service';

const forRout = [
      {path: 'admin', component: AdminComponent},
      {path: 'member', component: MemberComponent},
    ]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2AutoCompleteModule,
    RouterModule.forRoot(forRout)
  ],
  providers: [CountriesService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
