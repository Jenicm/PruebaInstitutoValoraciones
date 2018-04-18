import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuariosObservable: Observable<any[]>;

    constructor( private db: AngularFireDatabase) { }
  
    //AL INICIAR LA PÁGINA COGE LA LISTA DE USUARIOS DE LA BASE DE DATOS Y LOS GUARDA EN UN OBSERVABLE QUE LUEGO MOSTRAMOS EN EL HTML CON UN BUCLE
    //LA FUNCION NGONINIT AL INICIAR LA PAGINA CREA UN OBSERVABLE Y EN EL AÑADE LOS USUARIOS QUE COGE DE LA BASE DE DATOS QUE DAMOS EN ELLA
    ngOnInit() {
    this.usuariosObservable = this.getUsuarios('/Usuarios');
  }
    //LA FUNCION GETUSUARIOS DEVUELVE UN OBSERVABLE DE LOS USUARIOS DE LA BASE DE DATOS QUE SE HA PASADO EN LA FUNCION ANTERIOR
    getUsuarios(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

}
