import { Ui } from "./Ui.js";

export class Timer extends Ui {
  #element = null;
  #numberOfSeconds = 0;
  #maxNumberOfSeconds = 999;

  init() {
    this.#element = this.getElement(this.UiSelectors.timer);
  }

  startTimer() {
    setInterval(() => this.#updateTimer(), 1000);
  }

  #updateTimer() {
    this.#numberOfSeconds++;
    this.#setTimerValue(this.#numberOfSeconds);
  }

  #setTimerValue(value) {
    this.#element.textContent = value;
  }
}
