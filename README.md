# calculadora-el-trica
calculadora elétrica


# 🔌 Calculadora de Consumo de Energia

Este projeto é um programa simples em **JavaScript** que calcula o **consumo diário e o custo mensal de energia elétrica** de um eletrodoméstico.

O usuário informa a potência ou o consumo em kWh do aparelho e quantas horas ele fica ligado por dia. O programa então calcula o gasto aproximado de energia.

---

## 📌 Funcionalidades

* Calcular consumo de energia baseado em **potência em Watts**
* Calcular consumo baseado diretamente em **kWh**
* Mostrar:

  * Consumo diário
  * Custo diário
  * Custo mensal aproximado

---

## ⚙️ Como funciona

O programa pede algumas informações ao usuário:

1. Nome do eletrodoméstico
2. Modo de cálculo:

   * `1` → Converter **Watts para kWh**
   * `0` → Usar **kWh diretamente**
3. Quantas horas por dia o aparelho fica ligado

O valor da energia utilizado no cálculo é **R$ 0,90 por kWh**.

---

## 🧮 Fórmulas utilizadas

### Conversão de Watts para kWh

```
kWh = potência (W) / 1000
```

### Consumo diário

```
consumoDiario = kWh × horas
```

### Custo diário

```
custoDiario = consumoDiario × preço do kWh
```

### Custo mensal

```
custoMensal = custoDiario × 30
```

---

## 💻 Exemplo de uso

Entrada do usuário:

```
Eletrodoméstico: Microondas
Modo de conversão: 1
Potência: 1000 W
Horas ligado por dia: 2
```

Saída no console:

```
O consumo diário é: R$ 1.8
O consumo no mês é: R$ 54
```

---

## 🚀 Tecnologias utilizadas

* JavaScript
* Execução via **Console / Navegador**

---

## 📚 Objetivo do projeto

Este projeto foi desenvolvido para **praticar lógica de programação e JavaScript**, trabalhando com:

* Variáveis
* Estruturas condicionais (`if` / `else`)
* Entrada de dados com `prompt`
* Saída de dados com `console.log`

---



