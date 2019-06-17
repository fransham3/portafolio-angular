import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../service/infoPagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

// tslint:disable-next-line: variable-name
  constructor(public _servicio: InfoPaginaService) { }

  ngOnInit() {
  }

}
