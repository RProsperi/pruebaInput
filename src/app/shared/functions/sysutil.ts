
/**
 * Cambia los Espacios en Blanco en strings por 0
 */
export function ceros(linea: string): string {
    return linea.replace( /\s/g, '0' );
  }

  /**
   * Agrega Espacios en Blanco a la derecha de un string hasta que el string llegue al largo designado
   */
export function txt(palabra: string, largo: number): string{
     while ( palabra.length < largo ) { palabra += ' '; }
     return palabra;
  }

  /**
   * Agrega Espacios en Blanco a la izquierda de un string hasta que el string llegue al largo designado
   */
export function txt1(palabra: string, largo: number): string{
     while (palabra.length < largo) { palabra = ' ' + palabra; }
     return palabra;
  }

  /**
   * Transforma un valor entero en String y agrega espacios en blanco a la izquierda hasta el largo designado
   */
export function lintstr(valor: number, largo: number): string{
     let cadena: string = valor.toString();
     if (cadena.indexOf('.') === -1){
         while (cadena.length < largo) {cadena = ' ' + cadena; }
     }
     else{
         cadena = 'ERROR - Solo para enteros';
     }
     return cadena;
  }

  /**
   * Devuelve un string la hora actual al momento de su ejecucion en formato 24H
   * EJ: 23:45
   */
export function horas(): string{
     return new Date().getHours().toString() + ':' + new Date().getMinutes().toString();
  }

  /**
   * Transforma un valor Numerico en String usando . para miles y , para decimales, luego rellena de espacios
   * en blanco a la izquierda hasta alcanzar el largo designado y se le puede definir la cantidad de decimales a mostrar
   * EJ: 12500.35 = 12.500,35
   */
export function display_d(valor: number, largo: number, decimales: number): string{
     const cadena: string[] = valor.toFixed(decimales).toString().split('.');
     let resultado = '';
     if (decimales <= 0) { resultado = cadena[0].replace(/(.)(?=(\d{3})+$)/g, '$1.'); }
     else { resultado = cadena[0].replace(/(.)(?=(\d{3})+$)/g, '$1.') + ',' + cadena[1]; }
     while (resultado.length < largo) { resultado = ' ' + resultado; }
     return resultado;
  }

  /**
   * Transforma un valor Numerico en String usando , para miles y . para decimales, luego rellena de espacios
   * en blanco a la izquierda hasta alcanzar el largo designado y se le puede definir la cantidad de decimales a mostrar
   * EJ: 12500.35 = 12,500.35
   */
export function display_x(valor: number, largo: number, decimales: number): string{
     const cadena: string[] = valor.toFixed(decimales).toString().split('.');
     let resultado = '';
     if (decimales <= 0) { resultado = cadena[0].replace(/(.)(?=(\d{3})+$)/g, '$1,'); }
     else { resultado = cadena[0].replace(/(.)(?=(\d{3})+$)/g, '$1,') + '.' + cadena[1]; }
     while (resultado.length < largo) { resultado = ' ' + resultado; }
     return resultado;
  }

  /**
   * Transforma un valor Numerico en String lineal (sin separador decimal) luego rellena de 0
   * a la izquierda hasta alcanzar el largo designado y se le puede definir la cantidad de decimales a mostrar
   * EJ: 12500.35 = 0001250035
   */
export function display_xx(valor: number, largo: number, decimales: number): string{
     const cadena: string[] = valor.toFixed(decimales).toString().split('.');
     let resultado = '';
     if (decimales <= 0) { resultado = cadena[0]; }
     else { resultado = cadena[0] + cadena[1]; }
     while (resultado.length < largo) { resultado = '0' + resultado; }
     return resultado;
  }

  /**
   * Transforma un valor Numerico en String usando . para decimales, luego rellena de espacios
   * en blanco a la izquierda hasta alcanzar el largo designado y se le puede definir la cantidad de decimales a mostrar
   * EJ: 12500.35 = 12,500.35
   */
export function display_t(valor: number, largo: number, decimales: number): string{
     const cadena: string[] = valor.toFixed(decimales).toString().split('.');
     let resultado = '';
     if (decimales <= 0) { resultado = cadena[0]; }
     else { resultado = cadena[0] + '.' + cadena[1]; }
     while (resultado.length < largo) { resultado = ' ' + resultado; }
     return resultado;
  }

  /**
   * Transforma un valor Numerico en String usando . para decimales, luego rellena de espacios
   * en blanco a la izquierda hasta alcanzar el largo designado y se le puede definir la cantidad de decimales a mostrar
   * EJ: 12500.35 = 12,500.35
   */
export function display_tt(valor: number, largo: number, decimales: number): string{
     const cadena: string[] = valor.toFixed(decimales).toString().split('.');
     let resultado = '';
     if (decimales <= 0) { resultado = cadena[0]; }
     else { resultado = cadena[0] + ',' + cadena[1]; }
     while (resultado.length < largo) { resultado = ' ' + resultado; }
     return resultado;
  }

  /**
   * Recibe una fecha en string en formato DD-MM-YYYY le suma o resta el numero de dias que se le pasa
   * Devuelve el resultado en string en el mismo formato DD-MM-YYYY
   */
export function suma_dia(fecha: string, dia: number): string {
     // const fec: Date = new Date( fecha.substr(6, 4) + fecha.substr(2, 4) + fecha.substr(0, 2) + 'T00:00:00');
     const fec: Date = new Date( fech_a_HTfech(fecha) + 'T00:00:00');
     fec.setDate(fec.getDate() + dia);
     return (fec.getDate().toString().length < 2 ? '0' + fec.getDate().toString() : fec.getDate().toString()) + '-' +
     ((fec.getMonth() + 1).toString().length < 2 ? '0' + (fec.getMonth() + 1).toString() : (fec.getMonth() + 1).toString()) + '-' +
     fec.getFullYear();
   }

  /**
   * Transforma un String de Fecha de formato DD-MM-YYYY al formato recibido por los Input Date HTML YYYY-MM-DD
   */
export function fech_a_HTfech(fecha: string): string{
     return fecha.substr(6, 4) + fecha.substr(2, 4) + fecha.substr(0, 2);
  }

  /**
   * Transforma un String de Fecha del formato recibido por los Input Date HTML YYYY-MM-DD al formato DD-MM-YYYY
   */
export function HTfech_a_fech(fechaH: string): string{
     return fechaH.substr(8, 2) + fechaH.substr(4, 4) + fechaH.substr(0, 4);
  }

  /**
   * Recibe una fecha en string en formato DD-MM-YYYY le suma o resta el numero de dias que se le pasa
   * ignorando los dias no habiles para la suma (por los momentos solo sabados y domingos)
   * Devuelve el resultado en string en el mismo formato DD-MM-YYYY
   */
export function suma_diaH(fecha: string, veces: number): string {
     const fec: Date = new Date( fecha.substr(6, 4) + fecha.substr(2, 4) + fecha.substr(0, 2) + 'T00:00:00');
     const dia: number = veces < 0 ? -1 : 1;
     let llevo = 0;
     llevo = 0;
     while (llevo !== (veces < 0 ? veces * -1 : veces)) {
       fec.setDate(fec.getDate() + dia);
       if (fec.getDay() !== 0 && fec.getDay() !== 6)  {
         llevo += 1;
       }
     }
     return (fec.getDate().toString().length < 2 ? '0' + fec.getDate().toString() : fec.getDate().toString()) + '-' +
     ((fec.getMonth() + 1).toString().length < 2 ? '0' + (fec.getMonth() + 1).toString() : (fec.getMonth() + 1).toString()) + '-' +
     fec.getFullYear();
   }

  /**
   * Devuelve la fecha de Hoy en formato DD-MM-YYYY
   */
export function fechaHoy(): string {
      const fec: Date = new Date();
      return (fec.getDate().toString().length < 2 ? '0' + fec.getDate().toString() : fec.getDate().toString()) + '-' +
             ( (fec.getMonth() + 1).toString().length < 2 ? '0' + (fec.getMonth() + 1).toString() : (fec.getMonth() + 1).toString() ) +
             '-' + fec.getFullYear().toString();
    }

  /**
   * Devuelve la fecha de Hoy en formato YYYY-MM-DD
   */
export function HTfechaHoy(): string {
   const fec: Date = new Date();
   return (fec.getDate().toString().length < 2 ? '0' + fec.getDate().toString() : fec.getDate().toString()) + '-' +
          ( (fec.getMonth() + 1).toString().length < 2 ? '0' + (fec.getMonth() + 1).toString() : (fec.getMonth() + 1).toString() ) +
          '-' + fec.getFullYear().toString();
 }

 /**
  * Transforma un string de formato Display a number, se pasa el string y el separador decimal del campo
  */
export function dispANum(valor: string, separador?: string): number {
    let num = 0;
    if ( separador === ',' || separador === undefined) {
       num = parseFloat(valor.replace(/[\.\s]/g, '').replace(/,/g, '.'));
    }
    else if ( separador === '.' ) {
       num = parseFloat( valor.replace(/[,\s]/g, ''));
    }
    return num;
 }

/**
 * Devuelve el día de la semana de forma numérica donde 1 es Lunes y 7 Domingo
 */
export function dia_semana(fecha: string): number {
   const fec: Date = new Date(fecha.substr(6, 4) + fecha.substr(2, 4) + fecha.substr(0, 2) + 'T00:00:00');
   return fec.getDay() === 0 ? 7 : fec.getDay();
}

export function onKeyDownTDisplay(evento: any): void {
    if ((evento.key === ',' || evento.key === '-' || evento.code === 'Backspace' || evento.code === 'Tab') ||
       (evento.code === 'ArrowLeft' || evento.code === 'ArrowRight')) {
        if (evento.key === ',' && this.tDisplay.value.indexOf(',') > -1) { evento.preventDefault(); }
        return; }
    if (isNaN(parseInt(evento.key, 10))) { evento.preventDefault(); }
  }

export function onBlurTDisplay(evento: any, decimales: number): string {
    return display_d(dispANum(evento.target.value, ','), 0, decimales);
  }

export function onKeyDownTSumaDisplay(evento: any, decimales: number): string {
    const arrNum: string[] = [];
    let valor: string = dispANum(evento.target.value, ',').toFixed(decimales).toString();
    if (valor.indexOf('.') > -1) { valor = valor.split('.')[0] + valor.split('.')[1]; } else {
      valor = valor.split('.')[0];
     }
    for ( let i = 0; i < valor.length; i++ ) {
      arrNum.push( valor.substr(i, 1) );
    }
    if ( evento.code === 'Backspace' ) { arrNum.pop(); }
    if (!(isNaN(parseInt(evento.key, 10)))) {
      arrNum.push( evento.key );
    }
    if ( evento.code === 'Tab' ) { return evento.target.value; }
    if (arrNum.length < 3) { arrNum.splice(0, 0, '0'); }
    arrNum.splice( (arrNum.join('').length - decimales), 0, '.' );
    valor = arrNum.join('');
    evento.preventDefault();
    return display_d(parseFloat(valor), 1, decimales);
  }
