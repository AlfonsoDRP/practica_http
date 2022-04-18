import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ClienteService {
  private url: string = 'https://www.azurglobal.es/apiPracticas/clientes/';
  private cabecera: any = {};
  clientes: any = {};
  clientes_a_mostrar:any[]=[];
  filtro = {
    codigo: '',
    alias: '',
    provincia: '',
    documento: '',
    activo: '',
  };
  constructor(private http: HttpClient) {
    let token =
      'a142cd38ada80231e58d27cc25e33a7e0498632d3caa3714a03d31303f8cf5c42a4942c544416695f6f1896aa2e5c889';
    this.cabecera = { 'X-Auth': token };
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
      { headers: this.cabecera, params: filtros }
    );
  }
  set_clientes(clientes: any) {
    this.clientes = clientes;
    this.clientes_a_mostrar = this.clientes;
    console.log('clientes en srv: ', this.clientes);
  }
  filtrar() {
    console.log("he entrado");
    console.log(this.clientes[0].idcliente)
    this.clientes_a_mostrar = [];
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.filtro.codigo == this.clientes[i].idcliente) {
        console.log("Soy igual")
        if (this.filtro.alias == this.clientes[i].nombre) {
          if (this.filtro.provincia == this.clientes[i].provincia) {
            if (this.filtro.documento == this.clientes[i].documento) {
              if (this.filtro.activo == this.clientes[i].activo) {
                this.clientes_a_mostrar.push(this.clientes[i]);
                if (this.clientes_a_mostrar.length==0){
                  this.clientes_a_mostrar = this.clientes
                }
              }
            }
          }
        }
      }
    }
    console.log(this.clientes_a_mostrar);
  }
}
