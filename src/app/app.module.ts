import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    EmpleadosComponent,
    EjemploComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
