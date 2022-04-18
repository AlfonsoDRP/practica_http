import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  cliente_sele:any = [];
  clientes: any[] = [];
  

  constructor(private clienteSrv:ClienteService){
    clienteSrv.getCliente({}).subscribe(
      (data)=>{console.log(data); this.clientes = data.data;},
      (error) => {alert("Los datos no han podido cargarse");}
    )
  }
  ordenaclientes(){
    this.clientes.sort(function (a, b) {
      if (a.nombre > b.nombre) {
        return 1;
      }
      if (a.nombre < b.nombre) {
        return -1;
      }
      return 0;
    });
  }
  set_cliente_sele(index:any){
    this.cliente_sele=this.clientes[index];
  console.log(this.cliente_sele);
  }
  ngOnInit(): void {
  }

}
