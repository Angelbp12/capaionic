import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../service/getapi.service';
import { ModalController } from '@ionic/angular';
import { ModalDetalleUsuarioComponent } from '../components/modal-detalle-usuario/modal-detalle-usuario.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(private _MuestraUsuarios: GetapiService, private modalClt: ModalController) {}
  listaUsuarios:any[]=[];

  
  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this._MuestraUsuarios.obtenerUsuarios().subscribe({
      next: (value2) => {
        console.log(value2);
        this.listaUsuarios=value2;
      },
      error: (err) =>{
        console.log(err);
      },
      complete: () => {

      }
    });

    
  }
  async abrirModalDetalleUsuario (usuarioItem: any){
    const modal = await this.modalClt.create({
      component: ModalDetalleUsuarioComponent,
      componentProps: {
        usuario: usuarioItem
      }
    });
    modal.present();
  }

}


