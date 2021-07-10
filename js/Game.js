import { Cell } from "./Cell.js";
class Game {
  #config = {
    // ========= rendering buttons for each difficult
    easy: {
      rows: 8,
      cols: 8,
      mines: 10,
    },
    medium: {
      rows: 16,
      cols: 16,
      mines: 40,
    },
    expert: {
      rows: 16,
      cols: 30,
      mines: 99,
    },
  };
  initializeGame() {
    this.#newGame();
  }

  #newGame(
    rows = this.#config.easy.rows,
    cols = this.#config.easy.cols,
    mines = this.#config.easy.mines
  ) {
    this.#numberOfRows = rows;
    this.#numberOfCols = cols;
    this.#numberOfmines = mines;

    this.#generateCells();
  }

  #generateCells() {
    for (let row = 0; row < this.#numberOfRows; row++) {
      this.#cells[row] = [];

      for (let col = 0; col < this.#numberOfCols; cols++) {
        this.#cells[row].push(new Cell(col, row));
      }
    }
  }

  #numberOfRows = null;
  #numberOfCols = null;
  #numberOFmines = null;

  #cells = [];
}

window.onload = function () {
  const game = new Game();
  game.initializeGame();
};
