import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor() { }
  prueba = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  ngOnInit(): void {
  }

}
