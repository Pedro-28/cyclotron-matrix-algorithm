# Classe Cyclotron

A classe `Cyclotron` implementa um simulador de ciclotron, que é um tipo de acelerador de partículas utilizado na física nuclear. A classe possui métodos para acelerar elétrons, prótons e nêutrons em uma matriz de partículas.

## Métodos

### `accelerateElectron(matrix)`

Este método recebe uma matriz de partículas e acelera os elétrons presentes nela. O método percorre a matriz e substitui os elementos na primeira linha e na última coluna por "e", que representa o elétron acelerado. Os demais elementos da matriz são mantidos inalterados. O resultado é uma nova matriz com os elétrons acelerados.

### `accelerateProton(matrix)`

Este método recebe uma matriz de partículas e acelera os prótons presentes nela. O método percorre a matriz e substitui os elementos na primeira linha, última linha, primeira coluna, última coluna e na posição (tamanho das linhas - 2, tamanho das colunas - 2) por "p", que representa o próton acelerado. Os demais elementos da matriz, incluindo o elemento na posição (tamanho das linhas - 1, tamanho das colunas - 1), são mantidos inalterados. O resultado é uma nova matriz com os prótons acelerados.

### `accelerateNeutron(matrix)`

Este método recebe uma matriz de partículas e acelera os nêutrons presentes nela. O método percorre a matriz e substitui os elementos na primeira linha por "n", que representa o nêutron acelerado. Os demais elementos da matriz são mantidos inalterados. O resultado é uma nova matriz com os nêutrons acelerados.

### `cyclotron(particle, matrix)`

Este método recebe um tipo de partícula e uma matriz de partículas. Com base no tipo de partícula especificado, o método chama os métodos correspondentes (`accelerateElectron`, `accelerateProton` ou `accelerateNeutron`) para acelerar as partículas na matriz. Se o tipo de partícula não for reconhecido, a matriz original é retornada. O resultado é uma nova matriz com as partículas aceleradas de acordo com o tipo especificado.

## Função auxiliar `generateMatrix(row, column)`

Esta função auxiliar cria uma matriz com o número de linhas e colunas especificado. Recebe dois parâmetros: `row` (número de linhas) e `column` (número de colunas). A matriz gerada terá todas as suas células preenchidas com o valor `1`.

## Exemplo de Uso

```javascript
const cyclotron = new Cyclotron();
const matrix = generateMatrix(6, 6);

console.log(cyclotron.cyclotron("e", matrix));
```

Este exemplo utiliza a função `generateMatrix` para criar uma matriz de 6x6, cria uma instância da classe `Cyclotron` e chama o método `cyclotron` para acelerar os elétrons na matriz. O resultado é exibido no console.
