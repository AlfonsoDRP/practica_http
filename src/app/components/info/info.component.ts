import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  clientes: any[] = [];
  Startitem=0;
  Enditem=20;
  rotate = true;
  currentpage=1;

  
  constructor(public clienteSrv:ClienteService){
    clienteSrv.getCliente({}).subscribe(
      (data)=>{console.log(data); this.clientes = data.data;this.ordenaclientes();clienteSrv.set_clientes(this.clientes);this.clienteSrv.cliente_sele = this.clienteSrv.clientes_a_mostrar[0];},
      (error) => {alert("Los datos no han podido cargarse");}
    )
    
    
  }

  pageChanged(event: PageChangedEvent): void {
    this.Startitem = (event.page - 1) * event.itemsPerPage;
    this.Enditem = event.page * event.itemsPerPage;
    // this.array_filtrado=this.datos_clientes_tabla.slice(this.startItem, this.endItem);
  }

  ordenaclientes(){
    this.clientes.sort(function(a, b) {
      return a.idcliente - b.idcliente;
    });
  }
  set_cliente_sele(index:any){
    this.clienteSrv.cliente_sele=index;
    this.clienteSrv.cliente_sele_muestra =this.clienteSrv.cliente_sele;
    console.log(index);
  }

  ngOnInit(): void {
  }

}
