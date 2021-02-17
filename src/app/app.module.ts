import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { SharedModule } from './shared/shared.module';
registerLocaleData(ptBr);
import { HttpRequestInterceptor } from './helpers/http-request.interceptor';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import { ErrorInterceptor } from './helpers/error.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    NgxSpinnerModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR'},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
