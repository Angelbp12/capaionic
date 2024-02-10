import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../service/getapi.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  constructor(private _ProductosService: GetapiService) { }
  listaProductos: any [] = [];

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(){
    this._ProductosService.obtenerProductos().subscribe({
      next: (value) => {
        console.log(value);
        this.listaProductos = value;
      },
      error:(err) =>{
        console.log(err);
      },
      complete: () => {

      }
    })
  }

}
