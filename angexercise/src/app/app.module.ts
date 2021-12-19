import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BeerCardComponent } from './modules/beers/components/beer-card/beer-card.component';
import { BeerContainerComponent } from './modules/beers/components/beer-container/beer-container.component';
import { BeerDetailsComponent } from './modules/beers/pages/beer-details/beer-details.component';
import { BeerShopComponent } from './modules/beers/pages/beer-shop/beer-shop.component';
import { BeersListComponent } from './modules/beers/pages/beers-list/beers-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BeerCardComponent,
    BeerContainerComponent,
    BeerDetailsComponent,
    BeerShopComponent,
    BeersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
