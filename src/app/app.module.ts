import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpCallComponent } from './http-call/http-call.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
