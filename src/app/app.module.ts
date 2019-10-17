import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components//footer/footer.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CoursesListComponent } from './components/courses/courses-list/courses-list.component';
import { CourseItemComponent } from './components/courses/course-item/course-item.component';
import { SearchComponent } from './shared/components/search/search.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderContainerComponent } from './components/header/header-container/header-container.component';
import { UserLogonComponent } from './components/header/user-logon/user-logon.component';
import { UserLogoffComponent } from './components/header/user-logoff/user-logoff.component';
import { LogoComponent } from './components/header/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BreadcrumbsComponent,
    CoursesListComponent,
    CourseItemComponent,
    SearchComponent,
    DashboardComponent,
    HeaderContainerComponent,
    UserLogonComponent,
    UserLogoffComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
