//calculadora de multiplos e submultiplos

/*input> unidade(A,I,ohm, W, V)
input > valor numerico(450)
input> qual conversao?
conversão > da unidade principal >>> só mili*/

let conversao1, conversao2
let unidade = parseInt(prompt("Digite qual unidade você que converter para mili(A = 1, I = 2, ohm = 3, W = 4 ou V = 5): "));
let valor = parseInt(prompt("Digite o valor númerico: "));


switch(unidade){

    case 1 : // A
    
   conversao1 = valor * 1000;
   conversao2 = valor / 1000;
   console.log("O valor em mili é: mA", conversao1 , "O valor de A é: ", conversao2);
   break

   case 2 : // I

   conversao1 = valor * 1000;
   conversao2 = valor / 1000;
   console.log("O valor em mili é: mI", conversao1, "O valor em I é: ", conversao2);
   break

   case 3: // ohm

   conversao1 = valor * 1000;
   conversao2 = valor / 1000;
   console.log("O valor em mili é: mohm", conversao1 , "O valor em ohm é: ", conversao2);
   break
   
   case 4: //W
   
   conversao1 = valor * 1000;
   conversao2 = valor / 1000;
   console.log("O valor em mili é: mW", conversao1 , "O valor em W é: ", conversao2);
   break

   case 5: //V

   conversao1 = valor * 1000;
   conversao2 = valor / 1000;
   console.log("O valor em mili é: mV", conversao1 , "O valor em V é: ", conversao2);
   break
   
}
