class Counter {
    #count = 0;
    constructor (counter) {
        this.countElement = counter.querySelector('span');
        this.buttonElement = counter.querySelector('button');
        this.#count = parseInt(this.countElement.textContent)
        this.buttonElement.addEventListener('click', () => {
            this.increaseCount();
        })
    }
    increaseCount () {
        this.#count++;
        this.updateCount();
    }
    updateCount () {
        this.countElement.textContent = this.#count;
    }
}

const counter = new Counter(document.querySelector('.counter'))