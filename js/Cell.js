import { Ui } from "./Ui.js";

export class Cell extends Ui {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.value = 0;
    this.isMine = false;
    this.isReveal = false;
    this.isFlegged = false;
    this.selector = `[data-x="${this.x}"][data-y="${this.y}"]`;
    this.element = null;
  }

  createElement() {
    const element = `<div class="cell border border--concave" data-cell data-x="${this.x}" data-y="${this.y}"></div>`;
    return element;
  }

  toggleFlag() {
    this.isFlagged = !this.isFlagged;
    this.element.classList.toggle("cell--is-flag");
  }

  revealCell() {
    this.isReveal = true;
    this.element.classList.remove("border--concave");
    this.element.classList.add("border--revealed");

    if (this.isMine) {
      this.element.classList.add("cell--is-mine");
      return;
    }
    if (this.value) {
      this.element.textContent = this.value;
      this.element.classList.add(`cell-info-${this.value}`);
    }
  }
  addMine() {
    this.isMine = true;
  }
}
