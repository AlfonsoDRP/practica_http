import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ClienteService {
  
  private url: string = 'https://www.azurglobal.es/apiPracticas/clientes/';
  private cabecera: any = {};

  constructor(private http: HttpClient) {
    let token =
      'a142cd38ada80231e58d27cc25e33a7e0498632d3caa3714a03d31303f8cf5c42a4942c544416695f6f1896aa2e5c889';
    this.cabecera = { 'X-Auth': token };
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
}
