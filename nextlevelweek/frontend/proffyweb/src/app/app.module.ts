import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexLandingComponent } from './pages/Landing/index.component';
import { TeacherListComponent } from './pages/TeacherList/index.component';
import { PageHeaderComponent } from './components/PageHeader/index.component';
import { TeacherFormComponent } from './pages/TeacherForm/index.component';
import { TeacherItemComponent } from './pages/TeacherList/TeacherItem/index.component';
import { InputComponent } from './components/Input/index.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexLandingComponent,
    TeacherListComponent,
    TeacherFormComponent,
    TeacherItemComponent,
    PageHeaderComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
