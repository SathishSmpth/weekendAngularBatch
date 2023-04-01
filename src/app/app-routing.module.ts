import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NewComponent } from './pages/newComponent/newComponent.component'; 

const routes: Routes = [
  { path:"" , component: NewComponent },
  { path: "homepage", component: HomePageComponent },
  { path: "aboutpage", component: AboutPageComponent },
  { path: "contactpage", component: ContactPageComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
