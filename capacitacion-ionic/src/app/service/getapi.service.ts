import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class GetapiService {

  constructor(private _http:HttpClient) { 
    
  }

  obtenerCategorias(): Observable<any>{
    return this._http.get('https://api.escuelajs.co/api/v1/categories');
  }



  obtenerProductos (): Observable<any> {
   return this._http.get('https://api.escuelajs.co/api/v1/products');
  }

  obtenerProductoById(idProducto: number){
    console.log(idProducto);
    return this._http.get(`https://api.escuelajs.co/api/v1/products/${idProducto}`)
  }

  

  obtenerUsuarios(): Observable<any> {
    return this._http.get('https://api.escuelajs.co/api/v1/users');
  }

 
}



