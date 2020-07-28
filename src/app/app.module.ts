import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routes';

// Componentes
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { MyworksComponentComponent } from './myworks-component/myworks-component.component';
import { SkillsComponentComponent } from './skills-component/skills-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';

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
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
