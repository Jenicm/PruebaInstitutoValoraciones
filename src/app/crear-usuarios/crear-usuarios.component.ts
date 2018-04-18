import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Usuario } from '../modelos/Usuario';
import { UsuarioService } from '../services/usuario.services';

@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.css'],
  providers: [AngularFireDatabase]
})

export class CrearUsuariosComponent implements OnInit {
  usuario: Usuario = new Usuario();
 
  constructor(private usuarioService: UsuarioService, private http: HttpClient, private router: Router) {}
 
  ngOnInit() {}
 
  //AÑADE UN USUARIO AL SERVICE PARA QUE LO INSERTE EN LA BASE DE DATOS
  //AL INICIAR LA FUNCION ONSUBMIT (CLICK EN EL BOTÓN AÑADIR) LLAMA A ESTA FUNCIÓN QUE LLAMA A LA FUNCIÓN SAVEUSUARIO
  onSubmit() {
    this.saveUsuario();
  }

  //ESTA FUNCION LLAMA A LA FUNCION CREARUSUARIO DEL DOCUMENTO SERVICE Y CREA Y GUARDA EL NUEVO USUARIO EN LA BASE DE EDATOS
  saveUsuario() {
    this.usuarioService.crearUsuario(this.usuario);
    this.usuario = new Usuario();
    //REDIRECCINA A LAPAGINA DE LISTAR CUANDO SE HA AGREGADO EL USUARIO
    this.router.navigate(['/lista-usuarios']);
  }

}