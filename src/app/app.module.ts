import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { AuthenticationDirective } from "./shared/derective-and-pipe/authentication.directive";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundModule } from "./pages/page-not-found/page-not-found.module";

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    PageNotFoundModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
