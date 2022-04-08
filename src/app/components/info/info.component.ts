import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  prueba:any = [];
  clientes: any[] = [];

  constructor(private clienteSrv:ClienteService){
    clienteSrv.getCliente({}).subscribe(
      (data)=>{console.log(data); this.clientes = data.data;},
      (error) => {alert("Los datos no han podido cargarse");}
    )
  }

  ngOnInit(): void {
  }

}
