import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatGridListModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
