import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatGridListModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { HostDirective } from './host-listener/host.directive';
import { PipesComponent } from './pipes/pipes.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { AppRoutingModule } from './app-routing.module';
// import { CoursesModule } from './courses/courses.module';

@NgModule({
  declarations: [
    AppComponent,
    InputOutputComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    LifeCycleComponent,
    ViewChildComponent,
    NgContentComponent,
    HostListenerComponent,
    HostDirective,
    PipesComponent,
    ReversePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // CoursesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
