// Servicio para proporcionar los dossiers al componente

import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class DossiersService {

  constructor(private http:Http) { }

  // Obtenemos los dossiers que nos han preparado
  getDossiers(): Observable<Object> {
    // Añadimos cabeceras necesarias para la llamada
    let opt: RequestOptions;
    let myHeaders: Headers = new Headers;
    myHeaders.append('Content-type', 'application/json');
    myHeaders.append('JsonStub-Public-Key', 'd472c63404a90cd0622819d3851feebb');
    myHeaders.append('JsonStub-Private-Key', '47b7a03b5793dcb6d85abc7eb282ed86410116bc');
    opt = new RequestOptions({
      headers: myHeaders
    });

    // Devolvemos los dossiers disponibles
    return this.http.get('https://gateway.marvel.com:443/v1/public/characters?apikey=d472c63404a90cd0622819d3851feebb')
      .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

}
