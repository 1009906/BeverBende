import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BeverBendeDynamicFormsComponent } from "./dynamic-forms/bever-bende-dynamic-forms.component";
import { YathzeeDynamicFormsComponent } from "./dynamic-forms/yathzee-dynamic-forms/yathzee-dynamic-forms.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    BeverBendeDynamicFormsComponent,
    YathzeeDynamicFormsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
