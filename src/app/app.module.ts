import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NavbarComponent} from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";
import { HttpClientModule } from '@angular/common/http';

const routes: Routes =[
  {
    path:'',
    redirectTo:'table',
    pathMatch:'full'

  },
  {
    path:'table',
    loadChildren: () => import('./table/table.module').then(m => m.TableModule),

  },
  {
    path:'statistics',
    loadChildren: () => import('./statistics/statistics.module').then(m => m.StatisticsModule),

  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
