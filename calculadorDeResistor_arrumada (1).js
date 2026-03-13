/* inputs = quatro faixas ou 5 faixas?
inputs = 1a faixa cor , 2a faixa cor, 3a faixa ...
*/

// 1. Criamos um "dicionário" com as informações de cada cor
// o nomeDaCor vai vir aqui e pegar o nome 

//const porque é uma informação fixa
const cores = {
    "preto":    { valor: 0, mult: 1,          tol: "20%" },
    "marrom":   { valor: 1, mult: 10,         tol: "1%" },
    "vermelho": { valor: 2, mult: 100,        tol: "2%" },
    "laranja":  { valor: 3, mult: 1000,       tol: "3%" },
    "amarelo":  { valor: 4, mult: 10000,      tol: "4%" },
    "verde":    { valor: 5, mult: 100000,     tol: "0.5%" },
    "azul":     { valor: 6, mult: 1000000,    t: "0.25%" },
    "violeta":  { valor: 7, mult: 10000000,   tol: "0.1%" },
    "cinza":    { valor: 8, mult: 100000000,  tol: "0.05%" },
    "branco":   { valor: 9, mult: 1000000000, tol: "10%" },
    "ouro":     { valor: 0, mult: 0.1,        tol: "5%" },
    "prata":    { valor: 0, mult: 0.01,       tol: "10%" }
};

// 2. Criamos uma função simples para perguntar a cor e buscar os dados dela
//Em vez de você escrever a mesma lógica de perguntar a cor várias vezes, você cria essa função uma vez só e dá um nome a ele: buscarCor.
function buscarCor(mensagem) { // mensagem é um parâmetro para esccrever a frase "Digite a cor da faixa"
    
    let nomeDaCor = prompt(mensagem).toLowerCase(); //o tolower case ele transforma o que o 
    // usuário digitou em letras minúsculas. Assim, se ele digitar "VERMELHO" ou "Vermelho",
    //  o programa entende sempre como "vermelho"
    
    return cores[nomeDaCor];
    //Usuário digita: "Verde"
//nomeDaCor vira: "verde"
//cores[nomeDaCor] vira: { valor: 5, mult: 100000, tol: "0.5%" }
//return entrega: Esse negocio para a variável cor1.
//Você usa: cor1.valor (que agora o computador sabe que é 5).

}

// 3. Função principal que faz o cálculo
function calcularResistor() {
    let numFaixas = parseInt(prompt("O resistor tem 4 ou 5 faixas?"));

    // Pegamos as duas primeiras cores (que todo resistor tem)
    // junta com a função buscarCor , essa parte é a mensagem
    let cor1 = buscarCor("Digite a cor da 1ª faixa:");
    let cor2 = buscarCor("Digite a cor da 2ª faixa:");
    
    //
    let valorFinalBase = 0;
    let multiplicador = 0;
    let tolerancia = "";

    // 4. Lógica para 4 faixas
    if (numFaixas === 4) {

        
        // Exemplo: Marrom (1) e Preto (0) vira 10

        //O ponto serve para você dizer ao computador: Entre nessa tabela e pegue apenas ESTA informação específica
        valorFinalBase = (cor1.valor * 10) + cor2.valor;
        
        let cor3 = buscarCor("Digite a cor da 3ª faixa (Multiplicador):");
        multiplicador = cor3.mult;
        
        let cor4 = buscarCor("Digite a cor da 4ª faixa (Tolerância):");
        tolerancia = cor4.tol;
    } 
    // 5. Lógica para 5 faixas
    else {
        

        let cor3 = buscarCor("Digite a cor da 3ª faixa (3º dígito):");

        // Exemplo: Marrom (1), Preto (0) e Vermelho (2) vira 102
        valorFinalBase = (cor1.valor * 100) + (cor2.valor * 10) + cor3.valor;
        
        let cor4 = buscarCor("Digite a cor da 4ª faixa (Multiplicador):");
        multiplicador = cor4.mult;
        
        let cor5 = buscarCor("Digite a cor da 5ª faixa (Tolerância):");
        tolerancia = cor5.tol;
    }

    // 6. Calculamos o valor total em Ohms
    let resultadoOhms = valorFinalBase * multiplicador;

    // 7. Exibimos o alerta final
    alert("O valor do resistor é: " + resultadoOhms + " Ω com tolerância de " + tolerancia);
}

// Chama a função para começar
calcularResistor();

/*1. BANCO DE DADOS (Objeto 'cores'):
     Armazena as informações técnicas (valor, multiplicador e tolerância)
     de cada cor, facilitando a busca sem usar vários "if"s.

  2. FUNÇÃO DE BUSCA ('buscarCor'):
     - Recebe um texto (parâmetro 'mensagem').
     - Abre um prompt e padroniza a entrada para letras minúsculas.
     - Acessa o objeto 'cores' usando colchetes [nomeDaCor].
     - Retorna o "pacote" (objeto) completo da cor escolhida.

  3. LÓGICA DE CÁLCULO:
     - 4 FAIXAS: Transforma a 1ª cor em dezena (x10) e soma com a 2ª.
     - 5 FAIXAS: Transforma a 1ª em centena (x100), a 2ª em dezena (x10) 
       e soma com a 3ª.
     
  4. RESULTADO FINAL:
     - O 'Valor Base' é multiplicado pelo fator da faixa de multiplicador.
     - O resultado é exibido em Ohms (Ω) junto com a tolerância.

  5. EXECUÇÃO:
     - A função 'calcularResistor()' é chamada no final para dar a
       partida no programa.*/