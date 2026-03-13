//calculadora de multiplos e submultiplos

/*input> unidade(A,I,ohm, W, V)
input > valor numerico(450)
input> qual conversao?
conversão > da unidade principal >>> só mili*/

let valor = parseFloat(prompt("Digite o valor númerico: "));

//toUpperCase serve para deixar tudo pra grande tipo se o amigo digita a -> A, se digita oHm -> OHM

let unidade = prompt("Escolha a unidade (ex: A, ohm, W, V...").toUpperCase();

let menu = "Escolha a conversão:\n" +
           "1: para Giga (G)\n" +
           "2: para Mega (M)\n" +
           "3: para Kilo (k)\n" +
           "4: para mili (m)\n" +
           "5: para micro (µ)\n" +
           "6: para nano (n)\n" +
           "7: para pico (p)";
let opcao = parseInt(prompt(menu)); 

//prefixo pra bota no nome depois e pra saber o numero tabela, 
// fator pra calcula, e simbolo pra juntar com o outro depois --> k -> kW

let prefixo, fator, simbolo


switch(opcao){
    case 1: prefixo = "Giga"; simbolo = "G"; fator = 1000000000; break; 
    case 2: prefixo = "Mega"; simbolo = "M"; fator = 1000000; break;
    case 3: prefixo = "Kilo"; simbolo = "k"; fator = 1000; break; 
    case 4: prefixo = "mili"; simbolo = "m"; fator = 1000; break;
    case 5: prefixo = "micro"; simbolo = "µ"; fator = 1000000; break;
    case 6: prefixo = "nano"; simbolo = "n"; fator = 1000000000; break;
    case 7: prefixo = "pico"; simbolo = "p"; fator = 1000000000000; break;
    default : alert("Opção inválida"); 

}
if (prefixo){

    let resultadoParaEscala 
    let resultadoParaPrincipal 

    //Os maiorzão primeiro
    if(opcao <= 3){
        resultadoParaEscala = valor/ fator;  //Ex: 1000W -> 1kW
        resultadoParaPrincipal = valor * fator;  //Ex: 1kW -> 1000W

        //Os menor
    }else{
        resultadoParaEscala = valor * fator;  //Ex: 1A -> 1000mA
        resultadoParaPrincipal = valor / fator;  //Ex: 1000mA -> 1A
    }
     //alert tem que usar ess--> ``  e esse --> ${}
    alert(`--- RESULTADOS ---
1. Se ${valor}${unidade} for Unidade Principal: 
Equivale a: ${resultadoParaEscala} ${simbolo}${unidade}

2. Se ${valor}${simbolo}${unidade} já for ${prefixo}: 
Equivale a: ${resultadoParaPrincipal} ${unidade}`);
}