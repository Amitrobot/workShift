import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkShiftComponent } from './work-shift/work-shift.component';
import { HeaderComponent } from './components/header/header.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    WorkShiftComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
