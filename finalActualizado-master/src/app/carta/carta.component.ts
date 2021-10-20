import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import  { Router } from '@angular/router'
import { Beer } from '../interfaces/beer';


@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  beers: Beer[] =[];

  beerI: Beer|undefined = undefined;

  constructor(private apiservice: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiservice.getAllBeer().subscribe(data =>{
      this.beers = data;
    })
  }

  ver(id: string){
    this.router.navigate(['vercerveza', id ]);
  }


}
