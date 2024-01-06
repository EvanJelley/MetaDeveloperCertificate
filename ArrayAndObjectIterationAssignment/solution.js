// Task 1

var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (item of dairy) {
        console.log(item)
    }
}

logDairy()

// Task 2

const animal = {
    canJump: true
    };
    
const bird = Object.create(animal);
    
bird.canFly = true;
    
bird.hasFeathers = true;

function birdCan() {
    for (entry of Object.entries(bird)) {
        console.log(`${entry[0]}: ${entry[1]}`)
    }
}

birdCan();

// Task 3

function animalCan() {
    for (prop in bird) {
        console.log(`${prop}: ${bird[prop]}`)
    }
}

animalCan();