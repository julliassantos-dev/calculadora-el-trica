function calcOhm() {

    let escolha = prompt("O que deseja calcular? (V, I ou R)").toUpperCase();
    let v, r, i;
if (escolha == "V") {
    // Para achar V, precisamos de R e I
     r = parseFloat(prompt("Digite o valor da Resistência (ohm):"));
     i = parseFloat(prompt("Digite o valor da Corrente (A):"));
     resultado = r * i;
    alert("A Tensão calculada é: " + resultado.toFixed(2) + " V");
} 

else if (escolha == "I") {
   
     v = parseFloat(prompt("Digite o valor da Tensão (V): "));
     r = parseFloat(prompt("Digite o valor da Resistência (Ohm): "));
     resultado = v / r;
     alert("A Corrente calculada é: " + resultado.toFixed(2) + " A");
    
} 

else if (escolha == "R") {
    
     v = parseFloat(prompt("Digite o valor da Tensão (V): "));
     i = parseFloat(prompt("Digite o valor da Corrente (I): "));
     resultado = v / i;
     alert("A Resistência calculada é: " + resultado.toFixed(2) + " Ohm");
    
} 

else {
    alert("Opção inválida! Digite V, I ou R.");
}
    alert("Resultado: " + resultado + " unidades");
}

function calcReq() {

    let tipo = prompt("(S) Série ou (P) Paralelo").toUpperCase();
let qtd = parseInt(prompt("Quantos resistores existem no circuito?"));

let resultado = 0;
let somaInversos = 0

if (tipo === "S") {
    // LÓGICA DE SÉRIE
    for (let i = 1; i <= qtd; i++) {
        let r = parseFloat(prompt("Digite o valor do Resistor " + i + " (ohm):"));
        resultado += r
    }
    alert("O valor do circuito em Série é: " + resultado + " ohm")
  
} 

else if (tipo === "P") {

    for (let i = 1; i <= qtd; i++) {
        let r = parseFloat(prompt("Digite o valor do Resistor " + i + " (ohm):"));
        somaInversos += (1 / r)
        
    }

    resultado = 1 / somaInversos;

    alert("O valor do circuito em Paralelo é: " + resultado.toFixed(2) + " ohm");
    
} 

else {
    alert("Opção iválida. Reinicie e digite S ou P");
    
}
}

function calcConsumo() {
    
    let kwh
let consumoDiario, custoDiario, consumoNoMes, custoMensal;
let potencia
let horas

let eletrodomestico = prompt("Digite qual é o eletro doméstico: ");

let opcao = parseFloat(prompt("Escolha o modo de entrada:\n1: Watts (W)\n0: já tenho em kWh"));
let taxa = parseFloat(prompt("Digite o valor da taxa por kWh (ex: 0.75): "))

if(opcao == 1){

    potencia = parseFloat(prompt("Digite a potência do eletro doméstico (W): "));
    horas = parseFloat(prompt("Quantas horas ele fica ligado por dia? "));

    kwh = potencia / 1000;
    consumoDiario = kwh * horas;

}
else if(opcao == 0){

    kwh = parseFloat(prompt("Digite o kWh do eletro doméstico: "));
    horas = parseFloat(prompt("Digite quantas horas o eletro doméstico dica ligado: "));
    consumoDiario = kwh * horas; 
} 
else {
    alert("Opção inválida! Reinicie e escolha 0 ou 1. ")
}

 custoDiario = consumoDiario * taxa;
 consumoNoMes = custoDiario * 30;
 custoMensal = consumoNoMes * taxa;

alert("RELATÓRIO DE CONSUMO - " + eletrodomestico + "\n" +
          "Consumo Diário: " + consumoDiario.toFixed(2) + " kWh\n" +
          "Custo Diário: R$ " + custoDiario.toFixed(2) + "\n" +
          "Consumo Mensal: " + consumoNoMes.toFixed(2) + " kWh\n" +
          "Custo Mensal Estimado: R$ " + custoMensal.toFixed(2));
}

function calcPrefixos() {
    
let valor = parseFloat(prompt("Digite o valor numérico: "));
let unidade = prompt("Escolha a unidade (ex: A, ohm, W, V): ").toUpperCase();

let menu = "Escolha a conversão:\n" +
           "1: Giga (G)\n" +
           "2: Mega (M)\n" +
           "3: Kilo (k)\n" +
           "4: mili (m)\n" +
           "5: micro (u)\n" +
           "6: nano (n)\n" +
           "7: pico (p)";

let opcao = parseInt(prompt(menu)); 
let prefixo, fator, simbolo;

switch(opcao){
    case 1: prefixo = "Giga"; simbolo = "G"; fator = 1000000000; break; 
    case 2: prefixo = "Mega"; simbolo = "M"; fator = 1000000; break;
    case 3: prefixo = "Kilo"; simbolo = "k"; fator = 1000; break; 
    case 4: prefixo = "mili"; simbolo = "m"; fator = 1000; break;
    case 5: prefixo = "micro"; simbolo = "u"; fator = 1000000; break;
    case 6: prefixo = "nano"; simbolo = "n"; fator = 1000000000; break;
    case 7: prefixo = "pico"; simbolo = "p"; fator = 1000000000000; break;
    default: alert("Opção inválida"); 
}

if (prefixo) {
    let resultadoParaEscala;
    let resultadoParaPrincipal;

    // LÓGICA PARA MÚLTIPLOS (G, M, k)
    if(opcao <= 3) {
        resultadoParaEscala = valor / fator;    // Ex: 1000V / 1000 = 1kV
        resultadoParaPrincipal = valor * fator; // Ex: 1kV * 1000 = 1000V
    } 
    // LÓGICA PARA SUBMÚLTIPLOS (m, u, n, p)
    else if(opcao > 3 && opcao <= 7) {
        resultadoParaEscala = valor * fator;    // Ex: 1A * 1000 = 1000mA
        resultadoParaPrincipal = valor / fator; // Ex: 1000mA / 1000 = 1A
    }

    alert("--- RESULTADOS ---\n" +
          "1. De Unidade Principal para " + prefixo + ": " + resultadoParaEscala + " " + simbolo + unidade + "\n" +
          "2. De " + prefixo + " para Unidade Principal: " + resultadoParaPrincipal + " " + unidade);
}
}

function calcResistor() {
    const cores = {
    "preto":    { v: 0, m: 1,          t: "20%" },
    "marrom":   { v: 1, m: 10,         t: "1%" },
    "vermelho": { v: 2, m: 100,        t: "2%" },
    "laranja":  { v: 3, m: 1000,       t: "3%" },
    "amarelo":  { v: 4, m: 10000,      t: "4%" },
    "verde":    { v: 5, m: 100000,     t: "0.5%" },
    "azul":     { v: 6, m: 1000000,    t: "0.25%" },
    "violeta":  { v: 7, m: 10000000,   t: "0.1%" },
    "cinza":    { v: 8, m: 100000000,  t: "0.05%" },
    "branco":   { v: 9, m: 1000000000, t: "10%" },
    "ouro":     { v: 0, m: 0.1,        t: "5%" },
    "prata":    { v: 0, m: 0.01,       t: "10%" }
};


// Ela pede a cor, transforma em minúsculo e busca no objeto 'cores'
function pegarDados(msg) {
    
    let num = parseInt(prompt("O resistor possui quantas faixas? (4 ou 5)"));
    if (num !== 4 && num !== 5) {
        alert("Quantidade de faixas inválida! Use 4 ou 5.");
        return; 
    }

    //abre o prompt
    let escolha = prompt(msg).toLowerCase();

    // 2. Tenta buscar a cor dentro da lista (objeto 'cores')
    let dadosDaCor = cores[escolha];

    // 3. Se a cor existir, ele retorna ela. 
    // Se NÃO existir (for inválida), ele retorna um valor "padrão" (zero) para não quebrar o cálculo.
    if (dadosDaCor) {
        return dadosDaCor;
    } else {
        return { v: 0, m: 1, t: "0%" };
    }
}

// 5. Lógica de cálculo baseada na quantidade de faixas
if (num === 4) {
    // Resistor de 4 faixas: [Dígito][Dígito] * Multiplicador
    valorBase = (c1.v * 10) + c2.v;
    multiplicador = pegarDados("Cor da 3ª faixa (Multiplicador):").m;
    tolerancia = pegarDados("Cor da 4ª faixa (Tolerância):").t;
} else {
    // Resistor de 5 faixas: [Dígito][Dígito][Dígito] * Multiplicador
    let c3 = pegarDados("Cor da 3ª faixa (3º Dígito):");
    valorBase = (c1.v * 100) + (c2.v * 10) + c3.v;
    multiplicador = pegarDados("Cor da 4ª faixa (Multiplicador):").m;
    tolerancia = pegarDados("Cor da 5ª faixa (Tolerância):").t;
}

// 6. Cálculo matemático final
let ohms = valorBase * multiplicador;

// 7. Formatação para facilitar a leitura (Ohm, Kilo-ohm ou Mega-ohm)
let resultadoFormatado;
if (ohms >= 1000000) {
    resultadoFormatado = (ohms / 1000000) + " MΩ"; // Converte para Mega
} else if (ohms >= 1000) {
    resultadoFormatado = (ohms / 1000) + " KΩ";    // Converte para Kilo
} else {
    resultadoFormatado = ohms + " Ω";              // Mantém em Ohms
}

// 8. Exibe o resultado final ao usuário
alert("Resistor: " + resultadoFormatado + " ± " + tolerancia);
}

function calcPotencia (){

    let valorV = parseFloat(prompt("Digite a tensão em volts (V): "));
    let valorI = parseFloat(prompt("Digite a corrente em ampères (I): "));

if(valorV === 0 ){
    alert("O valor da tensão não pode ser 0");
}
if(valorI === 0){
    alert("O valor do ampère não pode ser 0");
}
let potencia = valorV * valorI
let kilo = potencia / 1000

alert("A potência (watts) do circuito é: " + potencia.toFixed(1) + "W ou " + kilo.toFixed(1) + "kW");


}