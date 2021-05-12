class Stack {
    #items = []
    push = element => this.#items.push(element)
    pop = () => this.#items.pop()
    top = () => this.#items[this.#items.length - 1]
    isempty = () => this.#items.length === 0
    mkempty = () => this.#items.length = 0
    size = () => this.#items.length
}