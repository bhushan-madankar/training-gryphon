// const [x,y,z] = ["apple", "banana", "cherry"];
// console.log(x); // Output: apple
// console.log(y); // Output: banana
// console.log(z); // Output: cherry

const smoothie = {
    fats: ["avocado", "coconut oil"],
    fruits: ["banana", "mango", "pineapple"],
    liquids: ["almond milk", "coconut water"],
    protein: ["whey", "pea protein"]
};

const { fats, fruits, liquids, protein } = smoothie;
console.log(fats); // Output: ["avocado", "coconut oil"]
console.log(fruits); // Output: ["banana", "mango", "pineapple"]
console.log(liquids); // Output: ["almond milk", "coconut water"]
console.log(protein); // Output: ["whey", "pea protein"]

const containsSpinach = ({ fats }) => {
    console.log(fats);
}

containsSpinach(smoothie); // Output: ["avocado", "coconut oil"]