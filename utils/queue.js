class Queue {
  #items = [];
  push = item => this.#items.splice(0, 0, item);
  front = () => this.#items[0];
  pop = () => this.#items.pop();
  isempty = () => this.#items.length === 0;
  empty = () => (this.#items.length = 0);
  size = () => this.#items.length;
}
