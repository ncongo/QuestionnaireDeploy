import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ServicesModule } from "./services/services.module";
import { AuthGuard } from "./_guards/auth.guard";
import { JwtInterceptorProvider } from './_helpers/jwt.interceptor';
import { ErrorInterceptorProvider } from './_helpers/error.interceptor';
import { Routes, RouterModule } from "@angular/router";
import { PipesModule } from './_pipes/pipes.module';
import {RoleGuard} from "./_guards/role.guard";

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    ServicesModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    PipesModule.forRoot(),
  ],
  providers: [
    AuthGuard,
    JwtInterceptorProvider,
    ErrorInterceptorProvider,
    RoleGuard
  ],
  exports: [
    PipesModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
