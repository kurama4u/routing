import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { MemberComponent } from './member/member.component';
import { RouterModule, Routes } from '@angular/router'
import { CountriesService } from './countries.http.service';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { ProfileService } from './profile.service';
import { PostComponent } from './post.component';

const forRout = [
      {path: 'admin', component: AdminComponent},
      {path: 'member', component: MemberComponent},
    ]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MemberComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NguiAutoCompleteModule,
    RouterModule.forRoot(forRout)
  ],
  providers: [CountriesService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
