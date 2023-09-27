import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BeverBendeDynamicFormsComponent } from './dynamic-forms/bever-bende-dynamic-forms.component';
import { HomeBeverBendeComponent } from './home/home-bever-bende/home-bever-bende.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home-bever-bende', component: HomeBeverBendeComponent },
  { path: 'dynamic-forms', component: BeverBendeDynamicFormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }