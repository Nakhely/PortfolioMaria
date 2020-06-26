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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponentComponent,
    MyworksComponentComponent,
    SkillsComponentComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
