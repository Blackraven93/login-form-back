export default class {
  #name;

  constructor(name) {
    this.#name = name;
  }

  greeting() {
    return `Hello ${this.#name}`;
  }
}
