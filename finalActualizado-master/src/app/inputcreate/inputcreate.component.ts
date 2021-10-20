import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Beer } from '../interfaces/beer';
import  { Router } from '@angular/router'


@Component({
  selector: 'app-inputcreate',
  templateUrl: './inputcreate.component.html',
  styleUrls: ['./inputcreate.component.css']
})
export class InputcreateComponent implements OnInit {


  beers: Beer[] =[];

  formCreate: FormGroup;


  constructor( private formbuilder: FormBuilder, private apiservice: ApiService, private router: Router) { 
    this.formCreate = formbuilder.group({
    "nombre": new FormControl(),
    "origen": new FormControl(),
    "descripcion": new FormControl(),
    "precio": new FormControl(),
    "imagen": new FormControl()
    });
  }

  ngOnInit(): void {
    this.refreshBeer
  }

  refreshBeer(){
    this.apiservice.getAllBeer().subscribe(data =>{
      console.log(data)
      this.beers=data;
    })
  }

  addnewBeer(){
    console.log(this.formCreate.value);
    const newFormData = (this.formCreate.value);
    this.apiservice.createBeer(newFormData).subscribe(data =>{
      console.log(data);
      this.router.navigate(['tabla']);

    })

  }
 

}
