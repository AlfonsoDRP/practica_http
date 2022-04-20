import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js'
import { cliente } from '../models/cliente.model';

@Injectable()
export class ClienteService {
  private url: string = 'https://www.azurglobal.es/apiPracticas/clientes/';
  private cabecera: any = {};
  bandera:boolean = true;
  clientes: any = {};
  clientes_a_mostrar: any[] = [];
  cliente_sele: any = [];
  cliente_sele_muestra:cliente = new cliente({});

  filtro = {
    alias: '',
    activo: '',
    provincia: '',
    documento: '',
    codigo: '',
  };

  fecha:Date = new Date(Date.now());
  nombre = 'ALFONSO';

  constructor(private http: HttpClient) {

    let dia = this.fecha.getDate() < 9 ? '0'+this.fecha.getDate() : this.fecha.getDate();
    let mes = this.fecha.getMonth() < 9 ? '0'+(this.fecha.getMonth()+1) : this.fecha.getMonth()+1;
    let año = this.fecha.getFullYear();
    let cadenaCompleta = this.nombre+año+mes+dia
    let token = CryptoJS.SHA384(cadenaCompleta).toString();
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
      this.clientes_a_mostrar = data.data;this.ordenaclientes();
    });
    
  }
}
