import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BlogGridComponent } from './blog-grid/blog-grid.component';
import { SliderComponent } from './slider/slider.component';
import { ManagerComponent } from './manager/manager.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AboutComponent, BlogComponent, BlogGridComponent, SliderComponent, ManagerComponent ],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }
