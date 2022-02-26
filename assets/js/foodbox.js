
function Foodbox() {
    let listoffruits = [
        "Apple",
        "Apricot",
        "Avocado",
        "Aubergine",
        "Banana",
        "Berries",
        "Butternut squash",
        "Cherries",
        "Chupa-chupa",
        "Crab apple",
        "Clementine",
        "Cucumber",
        "Courgette",
        "Custard apple",
        "Damsons",
        "Durian",
        "Dates",
        "Dragon fruit",
        "Eggfruit",
        "Entawak",
        "Fig",
        "Finger lime",
        "Grapefruit",
        "Grapes",
        "Guava",
        "Imbe",
        "Jackfruit",
        "Java apple",
        "Jambolan",
        "Jeruk limo",
        "Kiwi",
        "Kaffir lime",
        "Kumquat",
        "Lemon",
        "Lime",
        "Lychee",
        "Loquat",
        "Mango",
        "Mandarin",
        "Mangosteen",
        "Melon",
        "Nectarine",
        "Nyssa ogeche",
        "Nashi pear",
        "Olive",
        "Orange",
        "Papaya",
        "Persimmon",
        "Prickly pear",
        "Peach",
        "Pomegranate",
        "Pineapple",
        "Passion fruit",
        "Pluot",
        "Pear",
        "Pepper",
        "Pumpkin",
        "Pomelo",
        "Quince",
        "Rambutan",
        "Raisins",
        "Rose hips",
        "Star fruit",
        "Tomato",
        "Tangerine"
    ];

    let listofVegetables = [
        "Artichoke",
        "Beet Greens",
        "Broccoli Rabe",
        "Cabbage",
        "Chives",
        "Dandelion Greens",
        "Green Onion",
        "Kohlrabi",
        "Mustard Greens",
        "Parsnips",
        "Radicchio",
        "Seaweed",
        "Sweet Potatoes",
        "Turnips",
        "Arugula",
        "Beets",
        "Brussels Sprouts",
        "Carrots",
        "Collard Greens",
        "Eggplant",
        "Jicama",
        "Leeks",
        "Okra",
        "Potatoes",
        "Radish",
        "Shallots",
        "Swiss Chard",
        "Watercress",
        "Asparagus",
        "Bok Choy",
        "Butternut Squash",
        "Cauliflower",
        "Crookneck Squash",
        "Endive",
        "Kale",
        "Lettuce",
        "Onions (Red)",
        "Pumpkin",
        "Swede (Rutabaga)",
        "Spaghetti Squash",
        "Tomatillo",
        "Water Chestnut",
        "Bell Peppers",
        "Broccoli",
        "Cabbage (Green)",
        "Celery",
        "Daikon Radish",
        "Garlic",
        "Kimchi",
        "Mushrooms",
        "Onions (Yellow)",
        "Purple Sweet Potato",
        "Sauerkraut",
        "Spinach",
        "Tomatoes",
        "Zucchini"
    ];

    let fruit_list = [];
    let vegetables_list = [];

    // start and setup functions
    this.generateBox = function () {
        this.resetlists();
        const fruit1 = Math.floor(Math.random() * listoffruits.length);
        const fruit2 = Math.floor(Math.random() * listoffruits.length);
        const fruit3 = Math.floor(Math.random() * listoffruits.length);
        const veg1 = Math.floor(Math.random() * listofVegetables.length);
        const veg2 = Math.floor(Math.random() * listofVegetables.length);
        fruit_list = [listoffruits[fruit1], listoffruits[fruit2], listoffruits[fruit3]];
        vegetables_list = [listofVegetables[veg1], listofVegetables[veg2]];
        this.populatefruits();
        this.populatevegs();

    };

    this.populatefruits = function () {
        let list1 = document.getElementById("fruitslist")
        fruit_list.forEach((item) => {
            let li = document.createElement("li");
            li.innerText = item;
            list1.appendChild(li);
            list1
        })
    };

    this.populatevegs = function () {
        let list2 = document.getElementById("vegslist")
        vegetables_list.forEach((item) => {
            let li = document.createElement("li");
            li.innerText = item;
            list2.appendChild(li);
        })
    };

    this.resetlists = function () {
        document.getElementById("fruit_container").innerHTML = `<p><b>Fruits</b></p><ul id="fruitslist"></ul>`;
        document.getElementById("veg_container").innerHTML = `<p><b>Vegetables</b></p><ul id="vegslist"></ul>`;
    };
}


const box = new Foodbox();