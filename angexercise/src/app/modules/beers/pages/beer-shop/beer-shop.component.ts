import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BeersService } from '../../services/beers.service';
import { Beer, Type } from '../../../../shared/models/interface';

@Component({
  selector: 'angx-beer-shop',
  templateUrl: './beer-shop.component.html',
  styleUrls: ['./beer-shop.component.scss']
})
export class BeerShopComponent implements OnInit {

  beers!: Beer[];
  beerID?: Beer;
  id:number = 0;
  name?:string;
  type?:Type;
  selectedBeer?:Beer;

  constructor(private beerService: BeersService) { }

  ngOnInit(): void {
    this.beerService.getAll().subscribe(
      (data:Beer[]) => this.beers = data)
  }

  selectedID(id:number){
    this.beerService.getBeerById(id).subscribe(
      (data) => this.beerID = data).unsubscribe
  }

  selectBeer(name:string, type: Type){
    this.beerService.getBeerBySelect(name, type).subscribe(
      (data) => this.selectedBeer = data).unsubscribe
  }

}
