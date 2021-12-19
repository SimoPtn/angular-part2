import { Injectable,} from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators'
import { Beer, Type } from '../../../shared/models/interface'
@Injectable({
  providedIn: 'root'
})
export class BeersService {

  beers: Beer[] = [
    {
      id: 1,
      type: Type.MEDIUM,
      name: 'Ceres',
      price: 3.50
    },
    {
      id: 2,
      type: Type.SMALL,
      name: 'Castello',
      price: 1.50
    },
    {
      id: 3,
      type: Type.SMALL,
      name: 'Moretti',
      price: 2.50,
    },
    {
      id: 4,
      type: Type.SMALL,
      name: 'Franziskaner',
      price: 3.00
    },
    {
      id: 5,
      type: Type.MEDIUM,
      name: 'Bear Beer',
      price: 3.50
    },
    {
      id: 6,
      type: Type.SMALL,
      name: 'Desperados',
      price: 3.00
    },
    {
      id: 7,
      type: Type.SMALL,
      name: 'messina',
      price: 3.00,
    },
    {
      id: 8,
      type: Type.SMALL,
      name: 'Faxe',
      price: 3.50
    },
    {
      id: 9,
      type: Type.MEDIUM,
      name: 'Krombacher Weizen',
      price: 2.00
    },
    {
      id: 10,
      type: Type.SMALL,
      name: 'Hoegaarden',
      price: 1.70
    }
  ]

  private beerSubject = new BehaviorSubject<Beer[]>(this.beers)
  beers$ = this.beerSubject.asObservable();

  constructor() { }

  getAll(): Observable<Beer[]> {
    console.log(this.beers$)
    return this.beers$
  }

  getBeerById(id: number):Observable<Beer|undefined> {
    return this.beers$
      .pipe(
        map((data) => data.find(beer => beer.id === id))
      )
  }

  getBeerBySelect(name:string, type: Type):Observable<Beer|undefined> {
    return this.beers$
      .pipe(
        map((data) => data.find((beer:Beer) => beer.name === name && beer.type === type))
      )
  }
}
