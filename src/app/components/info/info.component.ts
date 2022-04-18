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
  

  constructor(public clienteSrv:ClienteService){
    clienteSrv.getCliente({}).subscribe(
      (data)=>{console.log(data); this.clientes = data.data;this.ordenaclientes();clienteSrv.set_clientes(this.clientes);},
      (error) => {alert("Los datos no han podido cargarse");}
    )
    
    
  }
  
  ordenaclientes(){
    this.clientes.sort(function(a, b) {
      return a.idcliente - b.idcliente;
    });
  }
  set_cliente_sele(index:any){
    this.cliente_sele=this.clienteSrv.clientes_a_mostrar[index];
  console.log(this.cliente_sele);
  }
  ngOnInit(): void {
  }

}
