# Calculadora de formas geométricas

Projeto realizado para o desafio final do primeiro semestre do curso de Sistemas de Informação da Faculdade XP Educação - IGTI.

## Tecnologias utilizadas

HTML5, CSS3 e Javascript vanilla.

## Regras

Desenvolva uma página Web para calcular áreas de algumas figuras geométricas. O funcionamento do programa será da seguinte forma:

Deve ser exibido um Menu Inicial com apresentação de Label para as seguintes opções:

a. Calcular Área do Triângulo Retângulo;

b. Calcular Área do Círculo;

c. Calcular Área do Quadrado;

d. Finalizar Programa.


Logo após, deve haver no menu um botão confirmar; após o usuário selecionar um Label e clicar no botão “Confirmar Figura”, o programa deve apresentar alguns campos para que o usuário dê o input das informações necessárias para o cálculo (ex.: Digite a Altura do Quadrado). 

Além dos campos para receber as informações, a página deve exibir um botão “Realizar Cálculo de Área”, que, quando clicado, deve emitir o valor calculado para a Área Total da figura geométrica selecionada. 

Sempre que o usuário quiser realizar novos os cálculos, basta selecionar o Label relacionado à figura geométrica, clicar no botão “Confirmar Figura”, dar input nos dados e clicar no botão “Realizar Cálculo de Área”

## Desenvolvimento

Inicialmente, foi testada a tag ```select``` no HTML para o criar uma lista no menu de opções. A ideia seria deixar os elementos escondidos na tela para que aparecessem apenas depois que a opção desejada fosse selecionada pelo usuário. No Javascript, testei a criação de uma função ```calcular()```, que agrupasse os cálculos correspondentes a cada figura.

Com o desenvolvimento, encontrei alguns desafios durante a manipulação da lista, que geravam vários bugs no momento de fazer os cálculos. Por uma questão de tempo, resolvi optar por uma solução mais simples, removendo o ```Menu de Opções``` e deixando cada figura com seu respectivo botão de ```calcular``` e ```limpar```.

A ideia é implementar melhorias neste projeto ao longo do tempo, para que se aproxime do objetivo inicial.
