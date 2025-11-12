class Monedas {
    constructor(monto, moneda) {
        this.monto = monto;
        this.moneda = moneda;
    }

    calcularDolar() {
        return this.monto / 18.31;
    }

    calcularEuro() {
        return this.monto / 21.22;
    }

    calcularLibra() {
        return this.monto / 24.11;
    }

    calcularYen() {
        return this.monto / 0.12;
    }

    generarConversion(){
        let total = 0;
        let simbolo = "";

        if (this.moneda == 'dolar') {
            total = this.calcularDolar();
            simbolo = "$";
        } if (this.moneda == 'euro') {
            total = this.calcularEuro();
            simbolo ="€";
        } if (this.moneda == 'libra') {
            total = this.calcularLibra();
            simbolo ="£";
        } if (this.moneda == 'yen') {
            total = this.calcularYen();
            simbolo ="¥";
        }
        return `La conversión de ${this.monto.toFixed(2)} MXN es ${simbolo}${total.toFixed(2)}`;
    }
}

document.getElementById('formu').addEventListener('submit', function(e){
    e.preventDefault();

    const monto = parseFloat(document.getElementById('monto').value);
    const moneda =document.getElementById('moneda').value;

    //crear obj- instancio la clase-
    const objConversion = new Monedas(monto,moneda);

    //mostrar resumen
    document.getElementById('conv').innerHTML= objConversion.generarConversion();
});