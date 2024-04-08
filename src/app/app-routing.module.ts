import { ProductInfoComponent } from './product-info/product-info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { ERROR404Component } from './error404/error404.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { ListAddComponent } from './list-add/list-add.component';
import { ListComponent } from './list/list.component';
import { ListeditComponent } from './listedit/listedit.component';
const routes: Routes = [
  {path:"home", title:"Home", component: HomeComponent},
  {path:"store", title:"Store", component: StoreComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {path:"about",title:"About", component:AboutComponent},
  {path:"login", title:"Login", component:LoginComponent},
  {path:"registar", title:"Register", component:RegisterComponent},

  {path:"productInfo/:id", title:"productInfo", component:ProductInfoComponent},
  {
    path:"admin",
      children: [
        {
          path:"dashboard",
          redirectTo:"dashboard",
          pathMatch:'full',
        },
        {
          path: 'dashboard',
          title: 'dashboard',
          component: DashboradComponent,
        },

        { path: 'login', title: 'Admin | Login', component: LoginComponent },
        {path: "register", title: 'Admin | Register', component: RegisterComponent},
        {
          path:"games",
          children: [
            {
              path:"lsit",
              redirectTo:"list",
              pathMatch:'full',
            },
            {
              path:"list",
              title:"list",
              component: ListComponent,
            },
            {
              path:"list-add",
              title:"list-add",
              component: ListAddComponent
            },
            {
              path:"listedit/:id",
              title:"listedit",
              component:ListeditComponent
            }

          ]
        }
      ],

  },
  {path:"**", title:"404 PAGE NOT FUOND", component:ERROR404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
