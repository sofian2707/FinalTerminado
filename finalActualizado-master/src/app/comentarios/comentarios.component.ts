import { Component, OnInit } from '@angular/core';
import { Coments } from '../interfaces/coments';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  comentarios: Coments[] =[];

  formCreate: FormGroup;



  constructor(private formbuilder: FormBuilder) {
    this.formCreate = formbuilder.group({
      "nombre": new FormControl(),
      "email": new FormControl(),
      "comentario": new FormControl(),
      });


   }


  ngOnInit(): void {
  }

  formcoment(){
    const formData = this.formCreate.value;
    this.comentarios.push(formData);
    console.log(this.comentarios);
    for(let i=0; i<this.comentarios.length; i++)[
      console.log(this.comentarios[i])
    ]
  }

}