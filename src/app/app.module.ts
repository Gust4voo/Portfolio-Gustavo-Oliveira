import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProgettiComponent } from './progetti/progetti.component';

const rotte: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'progetti',
    component: ProgettiComponent,
  },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ProgettiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotte),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
