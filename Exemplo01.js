function definirDados(nome, idade) {
    return `A pessoa ${nome}, possui ${idade} anos`;
}

const exibirDados2 = function(nome,idade){
    return `A pessoa ${nome}, possui ${idade} anos`;
}

const exibirDados3 = (nome, idade) =>{
    return `A pessoa ${nome}, possui ${idade} anos`;
}

const exibirDados4 = (nome, idade) => `A pessoa ${nome}, possui ${idade} anos`;

console.log(definirDados4('vitor',23));