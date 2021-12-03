import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification/notification.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { TeamComponent } from './team/team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { WhyComponent } from './why/why.component';
import { WhatComponent } from './what/what.component';
const routes: Routes = [
  {path: 'user-auth', component: UserAuthComponent},
  {path: 'home', component: HomeComponent},
  {path: 'notification', component: NotificationComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'team', component: TeamComponent},
  {path: 'why', component: WhyComponent},
  {path: 'what', component: WhatComponent},
  {path: 'notification', component: NotificationComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', redirectTo:'/user-auth', pathMatch:'full'},
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
