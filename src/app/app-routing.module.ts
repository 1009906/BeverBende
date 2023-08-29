import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dynamic-forms', component: DynamicFormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }