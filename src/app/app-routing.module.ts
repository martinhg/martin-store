import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { DemoComponent } from './components/demo/demo.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AdminGuard } from './guards/admin.guard';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
      { path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) },
      { path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule) },
      { path: 'order', loadChildren: () => import('./modules/order/order.module').then(m => m.OrderModule) }
    ]
  },
  {
    path: 'demo',
    component: DemoComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    loadChildren: () => import('./modules/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
