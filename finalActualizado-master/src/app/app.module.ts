import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CartaComponent } from './carta/carta.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { VercervezaComponent } from './vercerveza/vercerveza.component';
import { TablaComponent } from './tabla/tabla.component';
import { InputeditComponent } from './inputedit/inputedit.component';
import { InputcreateComponent } from './inputcreate/inputcreate.component';


import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ComentariosComponent } from './comentarios/comentarios.component'




const ROUTES: Routes = [
  {path: 'home', component: HomeComponent }, 
  { path: 'carta', component: CartaComponent },
  { path: 'ubicacion', component: UbicacionComponent }, 
  { path: 'administracion', component: AdministracionComponent },
  { path: 'tabla', component: TablaComponent },
  { path: 'inputcreate', component:  InputcreateComponent },
  { path: 'inputedit', component: InputeditComponent },
  { path: 'inputedit/:id', component: InputeditComponent },
  { path: 'vercerveza/:id', component: VercervezaComponent },
  { path: 'vercerveza', component: VercervezaComponent },
  { path: '**', component: HomeComponent },
  {path: 'comentarios', component: ComentariosComponent }, 
  
]



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CartaComponent,
    AdministracionComponent,
    UbicacionComponent,
    VercervezaComponent,
    TablaComponent,
    InputeditComponent,
    InputcreateComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot (ROUTES),
    BrowserModule, RouterModule.forRoot(ROUTES, { useHash: true }),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
