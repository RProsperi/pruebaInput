import { Aspectos } from './../../classes/aspecto';
import { Movimientos } from './../../classes/movims';
import { Component, OnInit } from '@angular/core';
import { display_d, onBlurTDisplay, onKeyDownTDisplay, onKeyDownTSumaDisplay, dispANum} from '../../functions/sysutil';

@Component({
  selector: 'app-prueba-numeros',
  templateUrl: './prueba-numeros.component.html',
  styleUrls: ['./prueba-numeros.component.scss']
})
export class PruebaNumerosComponent implements OnInit {

  mov: Movimientos = new Movimientos();
  aspecto: Aspectos = new Aspectos();

  tNominal: string;
  tValEfectivo: string;
  tPrecio: string;
  tTpCambio: string;
  tContra: string;
  tPContra: string;
  tYTM: string;

  onBlurTDisplayL = onBlurTDisplay;
  onKeyDownTDisplayL = onKeyDownTDisplay;
  onKeyDownTSumaDisplayL = onKeyDownTSumaDisplay;
  dispANumL = dispANum;


  constructor() { }

  ngOnInit(): void {
    this.mov.llenaValores(1545600.456, 0, 95.667878, 54.374569323, 23400.67853477, 8.445673333333, 103.4453109865702);
    this.tNominal = display_d(this.mov.nominal, 18, 2);
    this.calculaEfectivo();
    this.tPrecio = display_d(this.mov.precio, 18, 8);
    this.tTpCambio = display_d(this.mov.tpCambio, 18, 4);
    this.tContra = display_d(this.mov.contraprestacion, 18, 5);
    this.tPContra = display_d(this.mov.precioContra, 18, 8);
    this.tYTM = display_d(this.mov.ytm, 18, 10);
  }

  calculaEfectivo(): void{
    this.mov.valEfectivo = (this.mov.nominal * this.mov.precio) / 100;
    this.tValEfectivo = display_d(this.mov.valEfectivo, 18, 2);
  }

}
