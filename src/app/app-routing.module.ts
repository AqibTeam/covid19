import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'covi-card',
    loadChildren: () => import('./pages/covi-card/covi-card.module').then( m => m.CoviCardPageModule)
  },
  {
    path: 'covi-table',
    loadChildren: () => import('./pages/covi-table/covi-table.module').then( m => m.CoviTablePageModule)
  },
  {
    path: 'covi-details/:id',
    loadChildren: () => import('./pages/covi-details/covi-details.module').then( m => m.CoviDetailsPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/spain/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/spain/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'provinces',
    loadChildren: () => import('./pages/spain/provinces/provinces.module').then( m => m.ProvincesPageModule)
  },
  {
    path: 'towns',
    loadChildren: () => import('./pages/spain/towns/towns.module').then( m => m.TownsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
