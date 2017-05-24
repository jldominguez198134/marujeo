import { Component, OnInit, Input } from '@angular/core';
import {DossiersService} from "../dossiers.service";
import {Dossiers} from "../../../models/dossiers";

@Component({
  selector: 'app-dossiers',
  templateUrl: './dossiers.component.html',
  styleUrls: ['dossiers.component.scss']
})
export class DossiersComponent implements OnInit {

  arrayDossiers: Array<Object>; // Array inicial que guarda datos de la API
  newArrDossiers: Array<any>; // Array intermedio que va a guardar instancias del modelo con los datos que necesitamos
  arrayFinal: Array<Object> = []; // Array final que es el que pintará los datos definitivos

  itemsSize: number = 5; // Empezamos con 5 filas
  p: number = 1; // Empieza en la página 1
  id: number = 0;


  constructor(private dossiersService: DossiersService) {
    // Nos suscribimos al observable del servicio y obtenemos los datos que nos interesan

    this.dossiersService.getDossiers()
      .subscribe((dossiers) => {
        this.arrayDossiers = dossiers['data']['results'];

        // Recorremos el array inicial
        for (let d of this.arrayDossiers) {

          // Le sumamos uno a "p", ya que este es un dato que la api no nos trae como queremos
          this.id = this.id + 1;

          // Igualamos array intermedio a una serie de instancias del modelo (uno de los parámetros que tendriamos que modificar si añadimos datos a la lista)
          this.newArrDossiers = [
            new Dossiers(this.id, d['name'], d['modified'])
          ];

          // Accedemos a los datos finales
          this.newArrDossiers = this.newArrDossiers[0];

          // Añadimos al array final objetos cons los datos exactos de cada fila
          this.arrayFinal.push(
            {
              id: this.newArrDossiers['id'], // Número de dossier
              dossier: this.newArrDossiers['dossier'], // Nombre del dossier
              fecha: this.newArrDossiers['fecha'] // Fecha de introducción del dossier
            }
          );
        }
      });
  }

  // Cuando cambia el select de filas por pagina cambiamos el número de items
  onChange(ev) {
    this.itemsSize = ev;
    console.log(ev, this.itemsSize);
    return this.itemsSize;
  }

  ngOnInit() {
  }

}
