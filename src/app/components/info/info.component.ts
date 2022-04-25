import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  clientes: any[] = [];
  Startitem = 0;
  Enditem = 18;
  rotate = true;
  currentpage = 1;

  parametros:any = { 
    idcliente: this.clienteSrv.cliente_sele.idcliente,
    numero: this.clienteSrv.cliente_sele.numero,
    alias: this.clienteSrv.cliente_sele.alias,
    provincia: this.clienteSrv.cliente_sele.provincia,
    poblacion: this.clienteSrv.cliente_sele.poblacion,
    direccion: this.clienteSrv.cliente_sele.direccion,
    comercial: this.clienteSrv.cliente_sele.comercial,
    documento: this.clienteSrv.cliente_sele.documento,
    razon_social: this.clienteSrv.cliente_sele.razon_social,
    telefono: this.clienteSrv.cliente_sele.telefono,
    email: this.clienteSrv.cliente_sele.email,
    activo: this.clienteSrv.cliente_sele.activo,
    notas: this.clienteSrv.cliente_sele.notas,
    codigo_postal: this.clienteSrv.cliente_sele.cp
  };
  
  constructor(public clienteSrv: ClienteService) {
    clienteSrv.getCliente({}).subscribe(
      (data) => {
        console.log(data);
        this.clientes = data.data;
        this.ordenaclientes();
        clienteSrv.set_clientes(this.clientes);
        this.clienteSrv.cliente_sele = this.clienteSrv.clientes_a_mostrar[0];
      },
      (error) => {
        alert('Los datos no han podido cargarse');
      }
    );
  }

  resetParams(){
    this.parametros = {
      idcliente: undefined,
      numero: undefined,
      alias: undefined,
      provincia: undefined,
      poblacion: undefined,
      direccion: undefined,
      comercial: undefined,
      documento: undefined,
      razon_social: undefined,
      telefono: undefined,
      email: undefined,
      activo: undefined,
      notas: undefined,
      codigo_postal: undefined
    };
  }

  pageChanged(event: PageChangedEvent): void {
    this.Startitem = (event.page - 1) * event.itemsPerPage;
    this.Enditem = event.page * event.itemsPerPage;
    // this.array_filtrado=this.datos_clientes_tabla.slice(this.startItem, this.endItem);
  }

  ordenaclientes() {
    this.clientes.sort(function (a, b) {
      return a.idcliente - b.idcliente;
    });
  }

  set_cliente_sele(index: any) {
    this.clienteSrv.cliente_sele = index;
    console.log(this.clienteSrv.cliente_sele);
  }

  resetSele(){
    this.clienteSrv.cliente_sele={};
  }

  crear() {
    this.clienteSrv.crearCliente(this.parametros).subscribe(
     data => console.log(data) 
    )
    this.clienteSrv.filtrar();
  }

  modificar() {
    console.log(this.parametros);
    this.parametros.idcliente = this.clienteSrv.cliente_sele.idcliente;
    this.clienteSrv.modificarCliente(this.parametros).subscribe(
      data => console.log(data),
    )
    this.clienteSrv.filtrar();
  }

  borrar() {
    let id = this.clienteSrv.cliente_sele.idcliente;
    this.clienteSrv.deleteCliente(id).subscribe(
      (data) => {console.log("delete succesfull",data)},
      (error) => {console.log("error",error)});
    this.clienteSrv.filtrar();
  }

  ngOnInit(): void {}
}
