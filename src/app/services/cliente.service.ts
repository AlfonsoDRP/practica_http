import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ClienteService {
  private url: string = 'https://www.azurglobal.es/apiPracticas/clientes/';
  private cabecera: any = {};
  bandera:boolean = true;
  clientes: any = {};
  clientes_a_mostrar: any[] = [];
  filtro = {
    alias: '',
    activo: '',
    provincia: '',
    documento: '',
    codigo: '',
  };
  constructor(private http: HttpClient) {
    let token =
      '42215e7812293981e83c6262bea85cda4f3aa54ded272301d95e92059e33b99199c67cd2823a31aa6f91d5e042aa5638';
    this.cabecera = { 'X-Auth': token };
  }
  cambiarbandera(){
    this.bandera = !this.bandera;
    console.log(this.bandera);
  }
  set_filtro(x: any) {
    this.filtro = x;
    console.log(this.filtro);
  }
  getCliente(parametros: any): Observable<any> {
    const filtros = {
      alias: '',
      activo: '',
      provincia: '',
      documento: '',
      codigo: '',
    };
    return this.http.get<any>(
      'https://www.azurglobal.es/apiPracticas/clientes/',
      { headers: this.cabecera, params: parametros }
    );
  }
  set_clientes(clientes: any) {
    this.clientes = clientes;
    this.clientes_a_mostrar = this.clientes;
    console.log('clientes en srv: ', this.clientes);
  }
  ordenaclientes(){
    this.clientes_a_mostrar.sort(function(a, b) {
      return a.idcliente - b.idcliente;
    });
  }
  filtrar() {
    this.getCliente(this.filtro).subscribe((data) => {
      this.clientes_a_mostrar = data.data;this.ordenaclientes()
    });
  }
}
