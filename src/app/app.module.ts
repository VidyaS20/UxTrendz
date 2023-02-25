import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { MiddleComponent } from './main/middle/middle.component';
import { LeftComponent } from './main/left/left.component';
import { RightComponent } from './main/right/right.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { DbAssignmentComponent } from './db-assignment/db-assignment.component';
import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { TelevisionComponent } from './products/television/television.component';
import { RefrigeratorComponent } from './products/refrigerator/refrigerator.component';
import { WashingMachineComponent } from './products/washing-machine/washing-machine.component';
import { CardComponent } from './card/card.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ParentBhimComponent } from './parent-bhim/parent-bhim.component';
import { ChildVidyaComponent } from './child-vidya/child-vidya.component';
import { ViewchildComponent } from './viewchild/viewchild.component';

const routs:Routes =[
  {
    path:'', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path:'login', component: LoginpageComponent
  },
  // {
  //   path:'', redirectTo: 'parent', pathMatch: 'full'
  // },
  // {
  //   path:'parent', component: ParentBhimComponent
  // },
  {
  path:'home', component: HomeComponent
},
  {
  path:'about', component: AboutUsComponent
},
  {
  path:'products', component : ProductsComponent, children : [

    {
      path: 'mobile', component : MobileComponent
    },
    {
      path: 'refrigerator', component : RefrigeratorComponent
    },
    {
      path: 'television', component : TelevisionComponent
    },
    {
      path: 'washingmachine', component : WashingMachineComponent
    }
  ]
},
  {
  path:'contact', component: ContactUsComponent
},
{
  path:'buyProducts', component: ParentComponent
},
  {
  path:'**',component: PageNotFoundComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    MiddleComponent,
    LeftComponent,
    RightComponent,
    DataBindingComponent,
    DbAssignmentComponent,
    DirectivesComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    ContactUsComponent,
    LoginpageComponent,
    PageNotFoundComponent,
    MobileComponent,
    TelevisionComponent,
    RefrigeratorComponent,
    WashingMachineComponent,
    CardComponent,
    ParentComponent,
    ChildComponent,
    ParentBhimComponent,
    ChildVidyaComponent,
    ViewchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routs)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
