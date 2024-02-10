import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { GetapiService } from "../service/getapi.service";
import { ModalController } from '@ionic/angular';
import { ModalDetalleComponent } from '../components/modal-detalle/modal-detalle.component';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private _MuestraCategoria: GetapiService, private modalCtrl: ModalController) {}
  listaCategorias:any[]=[];

  
  ngOnInit(): void {
    this.obtenerCategoria();
  }

  obtenerCategoria(){
    this._MuestraCategoria.obtenerCategorias().subscribe({
      next: (value) => {
        console.log(value);
        this.listaCategorias=value;
      },
      error: (err) =>{
        console.log(err);
      },
      complete: () => {

      }
    })
  }

  async abrirModalDetalle(categoriaitem: any){
    const modal = await this.modalCtrl.create({
      component: ModalDetalleComponent,
      componentProps: {
        categoria: categoriaitem
      }
    });
    modal.present();
  }

  compartirCategoria(item: any){
    Share.share({
      title: item.name,
      text: item.id,
      url: item.image,
    });
  }

}
