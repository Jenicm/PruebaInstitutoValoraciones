import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModel, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { CrearUsuariosComponent } from './crear-usuarios/crear-usuarios.component';
import { environment } from '../environments/environment';
import { UsuarioService } from './services/usuario.services';
import { HttpClientModule } from '@angular/common/http';

// ENRUTAMIENTO, para navegar entre las distintas paginas
const appRoutes: Routes = [
  {
    path: 'lista-usuarios',
    component: ListaUsuariosComponent
  },
  { 
    path: 'crear-usuarios',
    component: CrearUsuariosComponent 
  },
  { 
    path: '',
    component: ListaUsuariosComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    CrearUsuariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
