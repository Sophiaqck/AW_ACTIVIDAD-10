class Calcular {
    constructor(estatura, peso) {
        this.estatura = estatura;
        this.peso = peso;
    }

    imc() {
        return this.peso / (this.estatura * this.estatura);
    }


    generarResultado() {
        let categoria;
        const imcC = this.imc();
        const imagen = document.getElementById('foto');

        if (imcC < 18.5) {
            categoria = 'Bajo Peso';
            imagen.src = 'images/Bajo.png';
        } else if (imcC >= 18.5 && imcC <= 24.9) {
            categoria = 'Normal';
            imagen.src ='images/normal.png';
        } else if (imcC >= 25 && imcC <= 30) {
            categoria = 'Sobrepeso';
            imagen.src = 'images/sobrepeso.png';
        } else {
            categoria = 'Obesidad';
            imagen.src = 'images/obesidad.png';
        }

        imagen.style.display = 'block';

        return `${imcC.toFixed(2)} kg/m2 <br> <br>
        Su estado de nutrición es de: <br>
        ${categoria}`;
    }
}

document.getElementById('formu').addEventListener('submit', calcularImc);

function calcularImc(e) {
    e.preventDefault();

    const estatura = parseFloat(document.getElementById('estatura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    const objCalcular = new Calcular(estatura, peso);

    document.getElementById("cal").innerHTML = objCalcular.generarResultado();
}