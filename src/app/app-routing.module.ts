import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HomemAranhaComponent } from './components/Metaverso/homem-aranha/homem-aranha.component';
import { MiranhasComponent } from './components/Metaverso/miranhas/miranhas.component';
const routes: Routes = [
  
  {path:'',component: HomeComponent},
  {path:'homem-aranha' ,component: HomemAranhaComponent},
  {path: 'homem-aranha/miranhas' ,component: MiranhasComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
