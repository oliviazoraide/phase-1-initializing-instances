// I need to create classes using Object Orientation. I need to create a class
// for Breakfast (includes food and drink), Lunch (includes salad, soup, and drink)
// and Dinner (includes salad, soup, entree, and a private property of dessert)

class Breakfast {
    constructor(food, drink) {
    this.food = food
    this.drink = drink
    }
}

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad
        this.soup = soup
        this.drink = drink
    }
}

class Dinner {
    #dessert;
    constructor(salad, soup, entree, dessert) {
        this.salad = salad
        this.soup = soup
        this.entree = entree
        this.#dessert = dessert
    }
}

let breakfast = new Breakfast("pancakes", "milk");
let lunch = new Lunch("southwest salad", "clam chowder", "coke");
let dinner = new Dinner("caesar salad", "tomato soup", "blackened salmon", "cheesecake");
