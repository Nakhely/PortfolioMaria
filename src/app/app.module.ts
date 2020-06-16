import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { MyworksComponentComponent } from './myworks-component/myworks-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponentComponent,
    MyworksComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
