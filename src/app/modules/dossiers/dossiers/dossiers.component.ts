import { Component, OnInit, Input } from '@angular/core';
import {DossiersService} from "../dossiers.service";

@Component({
  selector: 'app-dossiers',
  templateUrl: './dossiers.component.html',
  styleUrls: ['dossiers.component.scss']
})
export class DossiersComponent implements OnInit {

  arrayDossiers: Array<Object>;

  itemsSize: number = 5;
  p: number = 1;


  constructor(private dossiersService: DossiersService) {
    // Nos suscribimos al observable del servicio y obtenemos los datos que nos interesan

    this.dossiersService.getDossiers()
      .subscribe((dossiers) => {
        this.arrayDossiers = dossiers['data']['results'];
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
