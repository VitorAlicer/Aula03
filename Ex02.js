function calcularDesconto(valorCompra, possuiConvenio, possuiCartaoLoja) {
    
    let taxaDesconto = 0;

    if (possuiConvenio || possuiCartaoLoja) {
        taxaDesconto = 0.1;
    }

    if (possuiConvenio && possuiCartaoLoja) {
        taxaDesconto = 0.15;
    }

    const desconto = Math.min(valorCompra * taxaDesconto / 100);

    const valorFinal = valorCompra - desconto;

    return valorFinal;
}

const valorCompra1 = 200;
const possuiConvenio1 = true;
const possuiCartaoLoja1 = true;

const valorFinal1 = calcularDesconto(valorCompra1, possuiCartaoLoja1, possuiConvenio1);
console.log("Total = ", valorFinal1);

const valorCompra2 = 350;
const possuiConvenio2 = false;
const possuiCartaoLoja2 = true;

const valorFinal2 = calcularDesconto(valorCompra2, possuiCartaoLoja2, possuiConvenio2);
console.log("Total = ", valorFinal2);

const valorCompra3 = 400;
const possuiConvenio3 = false;
const possuiCartaoLoja3 = false;

const valorFinal3 = calcularDesconto(valorCompra3, possuiCartaoLoja3, possuiConvenio3);
console.log("Total = ", valorFinal3);