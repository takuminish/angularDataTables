import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackDataTablesPageComponent } from './components/BackDataTablesPage/BackDataTablesPage.component';
import { FrontDataTablesPageComponent } from './components/FrontDataTablesPage/FrontDataTablesPage.component';
import { MenuPageComponent } from './components/MenuPage/MenuPage.component';

const routes: Routes = [
  { path: '', component: MenuPageComponent },
  { path: 'front', component: FrontDataTablesPageComponent },
  { path: 'back', component: BackDataTablesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
