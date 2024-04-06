import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StoreComponent } from './store/store.component';
import { ERROR404Component } from './error404/error404.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { ListComponent } from './list/list.component';
import { ListeditComponent } from './listedit/listedit.component';
import { ListAddComponent } from './list-add/list-add.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { Router, RouterLink, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    StoreComponent,
    ERROR404Component,
    LoginComponent,
    RegisterComponent,
    ProductInfoComponent,
    DashboradComponent,
    ListComponent,
    ListeditComponent,
    ListAddComponent,
    AdminNavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
