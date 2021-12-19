import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/shared/models/interface';
import { BeersService } from '../../services/beers.service';

@Component({
  selector: 'angx-beer-container',
  templateUrl: './beer-container.component.html',
  styleUrls: ['./beer-container.component.scss']
})
export class BeerContainerComponent implements OnInit {
  beers: Beer[] = [];
  constructor( private beerService: BeersService) { }

  ngOnInit(): void {
    this.beerService.getAll().subscribe(data => {
      this.beers = data;
    })
  }

}
