import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetapiService } from "src/app/service/getapi.service";

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {

  producto: any;
  constructor(private GetapiService: GetapiService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe({
      next: (value: any)=>{
        this.obtenerDetalleProducto(value.idProducto);
      }
    })
  }

  obtenerDetalleProducto(idProducto: number){
    this.GetapiService.obtenerProductoById(idProducto).subscribe({
      next: (value)=>{
        console.log(value);
        this.producto=value;
      }
    })

  }  

}
