import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NavBarComponent, ParentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
