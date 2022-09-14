import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  clients = [{nombre:'Cliente 1', cif:'B 123', direc:'C/ la la la', grupo:1}];

  uploadClients(nombre:any, cif:any, direc:any, grupo:any){
    this.clients.push({nombre:nombre, cif:cif, direc:direc, grupo:grupo});
  }
}
