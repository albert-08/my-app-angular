import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  // template: "<p>Aquí iría un empleado</p>",
  styleUrls: ['./empleado.component.css']
  // styles: ["p {background-color: blue;}"]
})
export class EmpleadoComponent {
  // nombre = "";
  // apellido = "";
  // edad = 0;
  // empresa = ""

  /* getEdad() {
    return this.edad;
  } */

  habilitacionCuadro = true;
  usuRegistrado = false;

  getRegistroUsuario() {
    this.usuRegistrado=!this.usuRegistrado;
  }

  ingresarNombre(value:String) {
    console.info(value);
  }

  ingresarApellido(value:String) {
    console.info(value);
  }

  ingresarEdad(value:String) {
    console.info(value);
  }

  ingresarEmpresa(value:String) {
    console.info(value);
  }
}
