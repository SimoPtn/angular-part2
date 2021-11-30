import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderContainerComponent } from './core/order-container/order-container.component';
import { UserContainerComponent } from './core/user-container/user-container.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  { path: 'order', component: OrderContainerComponent },
  { path: 'user', component: UserContainerComponent },
  { path: '', component: UserContainerComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
