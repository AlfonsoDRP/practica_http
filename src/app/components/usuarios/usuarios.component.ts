import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  constructor(public clientesrv: ClienteService) {
  }
  filtro = {
    codigo: '',
    alias: '',
    provincia: '',
    documento: '',
    activo:''
  };
  ngOnInit(): void {}
}
