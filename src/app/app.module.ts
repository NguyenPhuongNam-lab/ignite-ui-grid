import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxGridModule, IgxPaginatorModule } from 'igniteui-angular';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [AppComponent, PaginatorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
    IgxPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
