import { AppComponent } from './AppComponent';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { appRoutes } from './app.routing';

@NgModule({
    declarations: [AppComponent], // directives, components, and pipes owned by this NgModule
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        // RouterModule.forRoot(appRoutes)
        ],
    providers: [
    ],
    bootstrap: [AppComponent],
})
export class AppModule {

}
