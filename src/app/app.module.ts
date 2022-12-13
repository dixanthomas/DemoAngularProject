import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { ApiDemoComponent } from './api-demo/api-demo.component';
import { RoutingDemoComponent } from './routing-demo/routing-demo.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { RoutingChildAComponent } from './routing-child-a/routing-child-a.component';
import { RoutingChildBComponent } from './routing-child-b/routing-child-b.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableDemoComponent,
    ApiDemoComponent,
    RoutingDemoComponent,
    PagenotfoundComponent,
    HomeComponent,
    RoutingChildAComponent,
    RoutingChildBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
