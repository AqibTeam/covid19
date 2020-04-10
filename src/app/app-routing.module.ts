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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
