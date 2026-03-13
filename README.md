# ⚡ Electrical Engineering Utility Suite

Conjunto de ferramentas lógicas desenvolvidas em **JavaScript Vanilla** para automação de cálculos fundamentais em engenharia elétrica e eletrônica.

---

## 🚀 Funcionalidades

O ecossistema é composto por três módulos principais:

### 1. Sistema de Gestão de Consumo Energético
Algoritmo para estimativa de custos operacionais de dispositivos eletrodomésticos.
* **Modos de Entrada:** Suporta Watts (W) ou entrada direta em kWh.
* **Projeção Financeira:** Calcula o impacto econômico diário e mensal.

### 2. Motor de Conversão de Escalas
Conversor bidirecional de grandezas físicas utilizando o Sistema Internacional de Unidades (SI).
* **Escopo:** De pico (p) até Giga (G).
* **Lógica:** Converte automaticamente entre unidade base e escalas prefixadas.

### 3. Decodificador de Resistores
Interpretador de resistores baseado no código de cores internacional.
* **Arquitetura:** Suporta resistores de **4 e 5 faixas**.
* **Saída:** Valor em Ohms ($\Omega$) e margem de tolerância.

---

## 🛠️ Detalhes Técnicos

* **Imutabilidade:** Uso de `const` para dicionários de cores e fatores.
* **UX:** Saídas formatadas via Template Literals.
* **Robustez:** Normalização de strings (Case-insensitive).

---

## 📋 Como Utilizar

Como os scripts utilizam métodos globais de interface (`prompt` e `alert`), eles podem ser executados:
1. Diretamente no console do navegador (F12).
2. Integrados a um arquivo `.html`.

---
**Desenvolvido por Seu Nome**
