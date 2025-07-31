const prompt = require('prompt-sync')();

let nomeHeroi = prompt("Olá Herói, digite seu nome: " );
let quantidadeEsperienciaXP = parseInt(prompt(`${nomeHeroi}, didite sua quantidade de experiência XP: `));
let nivel;

if (quantidadeEsperienciaXP <= 1000) {
    nivel = "Ferro";
} else if (quantidadeEsperienciaXP >= 1001 && quantidadeEsperienciaXP <= 2000) {
    nivel = "Bronze";
} else if (quantidadeEsperienciaXP >= 2001 && quantidadeEsperienciaXP <= 5000) {
    nivel = "Prata";
} else if (quantidadeEsperienciaXP >= 5001 && quantidadeEsperienciaXP <= 7000) {
    nivel = "Ouro";
} else if (quantidadeEsperienciaXP >= 7001 && quantidadeEsperienciaXP <= 8000) {
    nivel = "Platina";
} else if (quantidadeEsperienciaXP >= 8001 && quantidadeEsperienciaXP <= 9000) {
    nivel = "Ascendente";
} else if (quantidadeEsperienciaXP >= 9001 && quantidadeEsperienciaXP <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log(`\n O Herói de nome ${nomeHeroi} está no nível de ${nivel} \n`)
