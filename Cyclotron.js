function generateMatrix(row, column) {
  const matrix = Array.from({ length: row })
    .map(() => Array.from({ length: column }).map(() => 1));
  return matrix;
}

class Cyclotron {
  accelerateElectron(matrix) {
    return matrix.map((row, rowIndex) => (
      row.map((column, columnIndex) => {
        if (rowIndex === 0 || columnIndex === row.length - 1) return "e";
        return column;
      })
    ));
  }

  accelerateProton(matrix) {
    return matrix.map((row, rowIndex, rows) => (
      row.map((column, columnIndex) => {
        if (
          rowIndex === rows.length - 1 &&
          columnIndex === row.length - 1
        ) return column;
        if (
          rowIndex === 0 ||
          rowIndex === rows.length - 1 ||
          columnIndex === 0 ||
          columnIndex === row.length - 1
        ) return "p";
        if (
          rowIndex === rows.length - 2 &&
          columnIndex === row.length - 2
        ) return "p";
        return column;
      })
    ));
  }

  accelerateNeutron(matrix) {
    return matrix.map((row, rowIndex) => (
      row.map((column) => {
        if (rowIndex === 0) return "n";
        return column;
      })
    ));
  }

  cyclotron(particle, matrix) {
    if (particle === "e") {
      return this.accelerateElectron(matrix);
    }
    if (particle === "p") {
      return this.accelerateProton(matrix);
    }
    if (particle === "n") {
      return this.accelerateNeutron(matrix);
    }

    return matrix;
  }
}

const cyclotron = new Cyclotron();
const matrix = generateMatrix(6, 6);

console.log(cyclotron.cyclotron("e", matrix));
