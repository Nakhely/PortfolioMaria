import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { APP_ROUTING } from './app.routes';

// Componentes
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutComponentComponent } from './components/about-component/about-component.component';
import { MyworksComponentComponent } from './components/myworks-component/myworks-component.component';
import { SkillsComponentComponent } from './components/skills-component/skills-component.component';
import { ContactComponentComponent } from './components/contact-component/contact-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponentComponent,
    MyworksComponentComponent,
    SkillsComponentComponent,
    ContactComponentComponent,
    FooterComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
