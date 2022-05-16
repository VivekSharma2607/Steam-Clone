import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { GaugeModule } from 'angular-gauge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { HttpHeadersInterceptor } from './interceptors/http-header.interceptor';
import { HttpErrorsInterceptor } from './interceptors/http-errors.interceptor';
import { DetailComponent } from './components/detail/detail.component';
import { AppTabsComponent } from './components/app-tabs/app-tabs.component';
// import { DetailsComponent } from './components/details/details.component';
// import { GameTabsComponent } from './components/game-tabs/game-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    DetailComponent,
    AppTabsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GaugeModule.forRoot(),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorsInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}