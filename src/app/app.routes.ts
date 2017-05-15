import {Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dossiers',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: './modules/dossiers/dossiers.module#DossiersModule',
    data: {
      preload: true
    }
  }
];
