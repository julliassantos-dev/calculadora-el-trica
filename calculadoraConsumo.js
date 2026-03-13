let kwh
let consumoDiario, custoDiario, consumoNoMes
let potencia
let horas
let eletrodomestico = parseFloat(prompt("Digite qual é o eletro doméstico: "));
let opcao = parseInt(prompt("Digite qual é o modo de converssão(wat = 1 ou kWh = 0): "));
let taxa = parseInt(prompt("Digite o valor da taxa: "))

if(opcao == 1){

    potencia = parseInt(prompt("Digite a potência do eletro doméstico: "));
    horas = parseInt(prompt("Digite quantas horas o eletro doméstico dica ligado: "));
    kwh = potencia / 1000;
    consumoDiario = kwh * horas;
    custoDiario = consumoDiario * taxa;

}
else if(opcao == 0){

    kwh = parseInt(prompt("Digite o kWh do eletro doméstico: "));
    horas = parseInt(prompt("Digite quantas horas o eletro doméstico dica ligado: "));
    consumoDiario = kwh * horas; 
    custoDiario = consumoDiario * taxa;
}

consumoNoMes = custoDiario * 30;

console.log("O consumo diário é: R$", custoDiario);
console.log("O consumo no mês é: R$", consumoNoMes);

