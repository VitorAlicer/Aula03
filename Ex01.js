const paisReferencia = null;
const anoReferencia = 2023;

function podeConsumirAlcool(anoNascimento,paisReferencia,anoReferencia) {

let idadeMinima;

switch(paisReferencia) {
    
    case 'BR':
        idadeMinima = 18;
        break;
    case 'JP':
        idadeMinima = 19;
        break;
    case 'EUA':
        idadeMinima = 21;
        break;
    default: 
        return false; 
     
}
const resultado = anoReferencia - anoNascimento;

return resultado >= idadeMinima;

}

const anoNascimento = 2000

console.log(podeConsumirAlcool(anoNascimento,'BR', anoReferencia))
console.log(podeConsumirAlcool(anoNascimento,'JP', anoNascimento))
console.log(podeConsumirAlcool(anoNascimento,'EUA',anoReferencia))
