import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Beer } from "../interfaces/beer";
import { Observable } from "rxjs";
import { beforeRead } from "@popperjs/core";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "https://615cc0a9c298130017736307.mockapi.io/beer";

  constructor(private http: HttpClient) {}


  public getAllBeer(): Observable <Beer[]>{
    return this.http.get<Beer[]>(this.url);
  
    }

  public createBeer(beer: Beer):Observable <Beer> {
    return this.http.post<Beer>(this.url, beer);

      }

  public eliminar(id: string ) {
    return this.http.delete(`${this.url}/${id}`);
     }

  public getBeerById(id: string|null): Observable <Beer>{
    return this.http.get<Beer>(this.url+"/"+id)

  }
    
  public editBeer(beer: Beer): Observable <Beer>{
    return this.http.put<Beer>(`${this.url}/${beer.id}`,beer);

  }
    



  



  
  }




  

