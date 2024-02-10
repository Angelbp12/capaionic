import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-detalle-usuario',
  templateUrl: './modal-detalle-usuario.component.html',
  styleUrls: ['./modal-detalle-usuario.component.scss'],
})
export class ModalDetalleUsuarioComponent  implements OnInit {

  @Input() usuario: any;

  constructor(private modalCrl: ModalController) { }

  ngOnInit() {
    console.log(this.usuario);
  }

  cerrarModal(){
    this.modalCrl.dismiss();
  }

}
