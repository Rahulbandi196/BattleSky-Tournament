import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowseComponent } from './browse/browse.component';
import { UserinfoComponent } from './userinfo/userinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    BrowseComponent,
    UserinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    LayoutModule,
    AngularFireModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    AuthModule,
    FormsModule,
    AngularFireModule.initializeApp({apiKey: "AIzaSyCkkIG-JW735vxW-KgtLL-L9xusE9iL_D0",
    authDomain: "battlesky-50de0.firebaseapp.com",
    projectId: "battlesky-50de0",
    storageBucket: "battlesky-50de0.appspot.com",
    messagingSenderId: "787813595807",
    appId: "1:787813595807:web:84576f890844ee623500aa"
  })
   
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
