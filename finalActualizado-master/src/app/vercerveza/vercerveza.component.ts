import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beer } from '../interfaces/beer';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-vercerveza',
  templateUrl: './vercerveza.component.html',
  styleUrls: ['./vercerveza.component.css']
})
export class VercervezaComponent implements OnInit {

  beer!: Beer;

  

  constructor(private route: ActivatedRoute, private apiservice: ApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.apiservice.getBeerById(params.get("id")).subscribe(beer =>{
        this.beer = beer;
        console.log(this.beer)
      })

    })
  }


}
