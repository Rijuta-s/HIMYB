import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RijutaComponent } from './rijuta/rijuta.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HaridwarComponent } from './haridwar/haridwar.component';
import { MemoriesComponent } from './memories/memories.component';

const routes: Routes = [{
  path:'',
  component :HomepageComponent 
},
{
  path:'rijuta',
  component :RijutaComponent},
 { path:'memories/haridwar',
  component : HaridwarComponent
},
{path:'memories',
component: MemoriesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
