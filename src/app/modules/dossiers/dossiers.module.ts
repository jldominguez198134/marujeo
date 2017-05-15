import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DossiersService } from "./dossiers.service";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { DossiersComponent } from './dossiers/dossiers.component';
import { routes } from "./dossiers.routes";
import {NgxPaginationModule} from "ngx-pagination";
import {MomentModule} from "angular2-moment";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpModule,
    NgxPaginationModule,
    MomentModule
  ],
  providers: [
    DossiersService
  ],
  declarations: [DossiersComponent]
})
export class DossiersModule { }
