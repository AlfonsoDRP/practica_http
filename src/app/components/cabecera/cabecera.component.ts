import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {
  selected ="";
  constructor(public clientesrv:ClienteService) { 
    
  }

  ngOnInit(): void {
  }

}
