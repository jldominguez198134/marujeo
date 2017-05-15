import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Importamos Bootstrap
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

// Importamos FontAwesome
import {Angular2FontawesomeModule} from "angular2-fontawesome/angular2-fontawesome"

import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {PreloadCustom} from "./services/preload-custom.service";
import {HeaderComponent} from "./components/header/header.component";
import {NavComponent} from "./components/nav/nav.component";
import {UserComponent} from "./components/user/user.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadCustom
    }),
    Angular2FontawesomeModule
  ],
  providers: [
    PreloadCustom
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
