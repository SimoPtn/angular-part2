import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContainerComponent } from './container/container/container.component';
import { UserContainerComponent } from './core/user-container/user-container.component';
import { UserDetailComponent } from './core/user-detail/user-detail.component';
import { UserListComponent } from './core/user-list/user-list.component';
import { UserSingleComponent } from './core/user-single/user-single.component';
import { OrderContainerComponent } from './core/order-container/order-container.component';
import { OrderDetailComponent } from './core/order-detail/order-detail.component';
import { OrderListComponent } from './core/order-list/order-list.component';
import { OrderSingleComponent } from './core/order-single/order-single.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SectionHeaderComponent } from './shared/section-header/section-header.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    UserContainerComponent,
    UserDetailComponent,
    UserListComponent,
    UserSingleComponent,
    OrderContainerComponent,
    OrderDetailComponent,
    OrderListComponent,
    OrderSingleComponent,
    NavbarComponent,
    SectionHeaderComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
