import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { ArticalComponent } from './components/artical/artical.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ConfigrationComponent } from './components/configration/configration.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BorderComponent } from './components/border/border.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { DesignStyleComponent } from './components/design-style/design-style.component';
import { DarkmodeComponent } from './components/darkmode/darkmode.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MaincontentComponent,
    ArticalComponent,
    CommentsComponent,
    ConfigrationComponent,
    LayoutComponent,
    BorderComponent,
    AnimationsComponent,
    DesignStyleComponent,
    DarkmodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
