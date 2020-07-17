export class Movimientos {
    nominal: number;
    valEfectivo: number;
    precio: number;
    tpCambio: number;
    contraprestacion: number;
    precioContra: number;
    ytm: number;
    constructor(){
        this.nominal = 0;
        this.valEfectivo = 0;
        this.precio = 0;
        this.tpCambio = 0;
        this.contraprestacion = 0;
        this.precioContra = 0;
        this.ytm = 0;
    }

    llenaValores(nom?: number, vEfec?: number, prec?: number, tpCamb?: number,
                 contra?: number, pContra?: number, yt?: number): void{
                    if (nom !== undefined) { this.nominal = nom; }
                    if (vEfec !== undefined) {this.valEfectivo = vEfec; }
                    if (prec !== undefined) { this.precio = prec; }
                    if (tpCamb !== undefined) { this.tpCambio = tpCamb; }
                    if (contra !== undefined) { this.contraprestacion = contra; }
                    if (pContra !== undefined) { this.precioContra = pContra; }
                    if (yt !== undefined) { this.ytm = yt; }
    }

    limpiaMovimiento(): void {
        this.nominal = 0;
        this.valEfectivo = 0;
        this.precio = 0;
        this.tpCambio = 0;
        this.contraprestacion = 0;
        this.precioContra = 0;
        this.ytm = 0;
    }
}
