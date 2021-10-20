import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import  { Router } from '@angular/router'
import { Beer } from '../interfaces/beer';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  
  beers: Beer[] =[];

  constructor(private apiservice: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiservice.getAllBeer().subscribe(data =>{
      this.beers = data;
    })
  }

  editarItem(id: string){
    this.router.navigate(['inputedit', id ]);
  }

  crearItem(){
    this.router.navigate(['inputcreate']);
  }

  eliminarItem(id: string){
    this.apiservice.eliminar(id).subscribe(
      data => {
      console.log("DELETE Request is successful ", data);
      this.apiservice.getAllBeer().subscribe(data =>{
        console.log(data)
        this.beers=data;
      })

      },
      error => {
      console.log("Error", error);
      }
      );
  }



  ver(id: string){
    this.router.navigate(['vercerveza', id ]);
  }

}
