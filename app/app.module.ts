import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// аннотация
@NgModule({
 imports: [ BrowserModule ],
 declarations: [ AppComponent ],
 bootstrap: [ AppComponent ]
})

// класс имеет аннотацию
export class AppModule { }