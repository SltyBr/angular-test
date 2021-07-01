import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { OutputComponent } from './output/output.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { CommonModule } from '@angular/common';
import { BoldDirective } from './bold.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    OutputComponent,
    NgcontentComponent,
    BoldDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
