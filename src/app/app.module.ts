import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListenComponent } from './listen/listen.component';
import { RechnerRotationComponent } from './rechner-rotation/rechner-rotation.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ListenComponent, RechnerRotationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
