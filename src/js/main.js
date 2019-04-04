const button = document.querySelector('.box__button');
const text = document.querySelector('.box__text');
const string1 = 'Hello';
const string2 = 'Jij!';

class Box {
    constructor(button, text, first, second) {
        this.button = button;
        this.text = text;
        this.first = first;
        this.second = second;

        button.addEventListener('click', () => {this.fillText()});

        first = string1;
        second = string2;

    }

    fillText() {
        text.textContent = this.first + " " + this.second ;
    }
}

new Box (button, text, string1, string2);
