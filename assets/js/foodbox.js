
function Foodbox() {
    let listoffruits = [
        "Apple",
        "Apricot",
        "Avocado",
        "Aubergine",
        "Banana",
        "Blueberries",
        "Butternutsquash",
        "Cherries",
        "Chupa-chupa",
        "Blackberries",
        "Clementine",
        "Cucumber",
        "Courgette",
        "Custardapple",
        "Damsons",
        "Raspberries",
        "Strawberries",
        "Dragonfruit",
        "Cloudberries",
        "Entawak",
        "Fig",
        "Grapefruit",
        "Grapes",
        "Guava",
        "Jackfruit",
        "Kiwi",
        "Kaffirlime",
        "Kumquat",
        "Lychee",
        "Loquat",
        "Mango",
        "Mandarin",
        "Mangosteen",
        "Melon",
        "Nectarine",
        "Olive",
        "Orange",
        "Papaya",
        "Persimmon",
        "Peach",
        "Pomegranate",
        "Pineapple",
        "Passionfruit",
        "Pear",
        "Pepper",
        "Pumpkin",
        "Rambutan",
        "Starfruit",
        "Tomato",
        "Tangerine",
    ];

    let listofVegetables = [
        "BeetGreens",
        "BroccoliRabe",
        "Cabbage",
        "Chives",
        "DandelionGreens",
        "GreenOnion",
        "MustardGreens",
        "Parsnips",
        "Radicchio",
        "Seaweed",
        "SweetPotatoes",
        "Turnips",
        "Beets",
        "BrusselsSprouts",
        "Carrots",
        "CollardGreens",
        "Eggplant ",
        "Jicama",
        "Leeks",
        "Potatoes",
        "Radish",
        "Shallots",
        "SwissChard",
        "Watercress",
        "Asparagus",
        "BokChoy",
        "ButternutSquash",
        "Cauliflower",
        "CrookneckSquash",
        "Endive",
        "Kale",
        "Lettuce",
        "Onions(Red)",
        "Pumpkin",
        "Swede(Rutabaga)",
        "SpaghettiSquash",
        "WaterChestnut",
        "BellPeppers",
        "Broccoli",
        "Cabbage(Green)",
        "Celery",
        "DaikonRadish",
        "Garlic",
        "Kimchi",
        "Mushrooms",
        "Onions(Yellow)",
        "PurpleSweetPotato",
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