import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Beer } from '../interfaces/beer';
import { ApiService } from '../services/api.service';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { ConditionalExpr } from '@angular/compiler';


@Component({
  selector: 'app-inputedit',
  templateUrl: './inputedit.component.html',
  styleUrls: ['./inputedit.component.css']
})
export class InputeditComponent implements OnInit {

  beer!: Beer;

  formCreate: FormGroup;

  

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private apiservice: ApiService, private router: Router) {
    this.formCreate = formBuilder.group({
      "nombre": new FormControl(this.beer?.nombre),
      "origen": new FormControl(this.beer?.origen),
      "descripcion": new FormControl(this.beer?.descripcion),
      "precio": new FormControl(this.beer?.precio),
      "imagen": new FormControl(this.beer?.imagen)
      });
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.apiservice.getBeerById(params.get("id")).subscribe(beer =>{
        this.beer = beer;
        console.log(this.beer)
      })

    })
  }



  editBeer(){
    let beerForEdit= (this.formCreate?.value);
    beerForEdit.id = this.beer?.id;
    console.log(beerForEdit)
    this.apiservice.editBeer(beerForEdit).subscribe(data=>{
      console.log(data);
      this.router.navigate(['tabla']);
    })
  }



}