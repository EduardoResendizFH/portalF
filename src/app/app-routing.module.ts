import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'operador',
    //canActivate:[AdminGuard],
    loadChildren: () => import('./pages/operador/operador.module').then( m => m.OperadorPageModule)
  },
  {
    path: 'catalogos',
    loadChildren: () => import('./pages/catalogos/catalogos.module').then( m => m.CatalogosPageModule)
  },
  {
    path: 'cliente',
    //canActivate:[AdminGuard],
    loadChildren: () => import('./pages/cliente/cliente.module').then( m => m.ClientePageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./pages/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'nominaciones',
    loadChildren: () => import('./pages/nominaciones/nominaciones.module').then( m => m.NominacionesPageModule)
  },  {
    path: 'add-operador',
    loadChildren: () => import('./pages/add-operador/add-operador.module').then( m => m.AddOperadorPageModule)
  },
  {
    path: 'add-cliente',
    loadChildren: () => import('./pages/add-cliente/add-cliente.module').then( m => m.AddClientePageModule)
  },
  {
    path: 'nominacion',
    loadChildren: () => import('./pages/nominacion/nominacion.module').then( m => m.NominacionPageModule)
  },
  {
    path: 'autotanques',
    loadChildren: () => import('./pages/autotanques/autotanques.module').then( m => m.AutotanquesPageModule)
  },
  {
    path: 'autotanques-watch',
    loadChildren: () => import('./pages/autotanques-watch/autotanques-watch.module').then( m => m.AutotanquesWatchPageModule)
  },
  {
    path: 'saldo-opereacion',
    loadChildren: () => import('./pages/saldo-opereacion/saldo-opereacion.module').then( m => m.SaldoOpereacionPageModule)
  },
  {
    path: 'add-saldo-opereacion',
    loadChildren: () => import('./pages/add-saldo-opereacion/add-saldo-opereacion.module').then( m => m.AddSaldoOpereacionPageModule)
  },





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
