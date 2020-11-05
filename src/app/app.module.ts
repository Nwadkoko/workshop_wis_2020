import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { AssistanceComponent } from './assistance/assistance.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'introduction/:id', component: IntroductionComponent }, 
  { path: 'assistance', component: AssistanceComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    IntroductionComponent,
    AssistanceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
