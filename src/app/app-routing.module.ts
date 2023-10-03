import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BeverBendeDynamicFormsComponent } from './dynamic-forms/bever-bende-dynamic-forms.component';
import { HomeBeverBendeComponent } from './home/home-bever-bende/home-bever-bende.component';
import { HomeYathzeeComponent } from './home/home-yathzee/home-yathzee.component';
import { YathzeeDynamicFormsComponent } from './dynamic-forms/yathzee-dynamic-forms/yathzee-dynamic-forms.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home-bever-bende', component: HomeBeverBendeComponent },
  { path: 'dynamic-forms', component: BeverBendeDynamicFormsComponent },
  { path: 'home-yathzee', component: HomeYathzeeComponent },
  { path: 'yathzee-score-card', component: YathzeeDynamicFormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }