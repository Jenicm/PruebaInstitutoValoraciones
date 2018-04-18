import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';


import { QueryFn } from 'angularfire2/database/interfaces';
import { Usuario } from '../modelos/Usuario';
 
@Injectable()
export class UsuarioService { 
 
  private dbPath = '/Usuarios';
 
  usuariosRef: AngularFireList<Usuario> = null;
 
  constructor(private db: AngularFireDatabase) {
    this.usuariosRef = db.list(this.dbPath);
  }
 
  //INSERTA EN LA BASE DE DATOS EL USUARIO QUE LE HA PASADO EL TS DE CREAR-USUARIOS
  crearUsuario(usuario: Usuario): void {
    this.usuariosRef.push(usuario);
  }
  
  //COGE LOS USUARIOS DE LA BASE DE DATOS QUE SE LE HA PASADO EN EL ANTERIOR DOCUMENTO Y DEVUELVE LA LISTA DE LOS USUARIOS.
  getUsuariosList(): AngularFireList<Usuario> {
    return this.usuariosRef;
  }
 
  //SI HAY UN ERROR LO DEVUELVE POR CONSOLA
  private handleError(error) {
    console.log(error);
  }
}
