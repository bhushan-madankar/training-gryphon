export var color = "red";

export function setColor(newColor) {
    color = newColor;
}

let name = "Bhushan";

export const magicNumber = 7;

export default function sum(num1, num2) { // using default export no need to use { }
    return num1 + num2;
}

export class Rectangle{
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

export { subtract, multiply };