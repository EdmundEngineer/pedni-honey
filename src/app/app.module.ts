import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppBarComponent } from './app-bar/app-bar.component';
import { TabsComponent } from './tabs/tabs.component';
import { CardsComponent } from './cards/cards.component';
import { BottomNavigationComponent } from './bottom-navigation/bottom-navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { TeamComponent } from './team/team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { WhyComponent } from './why/why.component';
import { WhatComponent } from './what/what.component';
import { ListGroupsComponent } from './list-groups/list-groups.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MapsComponent } from './maps/maps.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    TabsComponent,
    CardsComponent,
    BottomNavigationComponent,
    HomeComponent,
    AboutUsComponent,
    FaqComponent,
    TeamComponent,
    ContactUsComponent,
    ServicesComponent,
    WhyComponent,
    WhatComponent,
    ListGroupsComponent,
    CarouselComponent,
    MapsComponent,
    ProfileComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
