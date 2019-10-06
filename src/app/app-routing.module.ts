import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'bar', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'calculadora', loadChildren: './calculadora/calculadora.module#CalculadoraPageModule' },
  { path: 'objetos', loadChildren: './objetos/objetos.module#ObjetosPageModule' },
  { path: 'lista-objetos', loadChildren: './lista-objetos/lista-objetos.module#ListaObjetosPageModule' },
  { path: 'bar', loadChildren: './bar/bar.module#BarPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
