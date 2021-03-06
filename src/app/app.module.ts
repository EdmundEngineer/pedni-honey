import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { PostProductComponent } from './post-product/post-product.component';
import { PostInfluencerComponent } from './post-influencer/post-influencer.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { OrdersComponent } from './orders/orders.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewsComponent } from './news/news.component';
import { RatingCardComponent } from './rating-card/rating-card.component';
import { CtaComponent } from './cta/cta.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';
import { SpecificProductComponent } from './specific-product/specific-product.component';
import { SearchOrdersComponent } from './search-orders/search-orders.component';
import { SpecificOrdersComponent } from './specific-orders/specific-orders.component';
import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasketComponent } from './basket/basket.component';
import { HistoryComponent } from './history/history.component';
import { CheckoutComponent } from './checkout/checkout.component';

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
    NotificationComponent,
    PageNotFoundComponent,
    UserAuthComponent,
    OrderHistoryComponent,
    PostProductComponent,
    PostInfluencerComponent,
    EditProductComponent,
    OrdersComponent,
    GalleryComponent,
    NewsComponent,
    RatingCardComponent,
    CtaComponent,
    NavigationComponent,
    SearchComponent,
    SpecificProductComponent,
    SearchOrdersComponent,
    SpecificOrdersComponent,
    SplashComponent,
    LoginComponent,
    ProductComponent,
    BasketComponent,
    HistoryComponent,
    CheckoutComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
