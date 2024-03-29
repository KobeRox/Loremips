function get_cuisineId(name){

	for(var i=0; i<list_cuisine.length; i++){
		if (list_cuisine[i]["cuisine"]["cuisine_name"] == name)
			return list_cuisine[i]["cuisine"]["cuisine_id"];
	}
}

function get_cuisineTop(){
    var cuisine_names = [];
    for (var i = 0; i < 6; i++) {
        cuisine_names.push(list_cuisine[i]["cuisine"]["cuisine_name"]);
    }
    return cuisine_names;
}

function get_cuisineList(){
	var cuisine_names= [];
	for(var i=0; i<list_cuisine.length; i++){
		cuisine_names.push(list_cuisine[i]["cuisine"]["cuisine_name"]);		
	}
	return cuisine_names;
}
var  list_cuisine = [
        {
            "cuisine": {
                "cuisine_id": 6,
                "cuisine_name": "Afghani"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 152,
                "cuisine_name": "African"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 1,
                "cuisine_name": "American"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 4,
                "cuisine_name": "Arabian"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 151,
                "cuisine_name": "Argentine"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 3,
                "cuisine_name": "Asian"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 401,
                "cuisine_name": "Asian Fusion"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 193,
                "cuisine_name": "BBQ"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 5,
                "cuisine_name": "Bakery"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 227,
                "cuisine_name": "Bar Food"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 132,
                "cuisine_name": "Belgian"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 270,
                "cuisine_name": "Beverages"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 159,
                "cuisine_name": "Brazilian"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 133,
                "cuisine_name": "British"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 247,
                "cuisine_name": "Bubble Tea"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 168,
                "cuisine_name": "Burger"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 1039,
                "cuisine_name": "Cafe Food"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 111,
                "cuisine_name": "Cambodian"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 121,
                "cuisine_name": "Cantonese"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 994,
                "cuisine_name": "Charcoal Chicken"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 25,
                "cuisine_name": "Chinese"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 161,
                "cuisine_name": "Coffee and Tea"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 287,
                "cuisine_name": "Colombian"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 144,
                "cuisine_name": "Contemporary"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 35,
                "cuisine_name": "Continental"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 928,
                "cuisine_name": "Creole"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 881,
                "cuisine_name": "Crepes"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 192,
                "cuisine_name": "Deli"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 100,
                "cuisine_name": "Desserts"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 268,
                "cuisine_name": "Drinks Only"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 985,
                "cuisine_name": "Dumplings"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 38,
                "cuisine_name": "European"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 571,
                "cuisine_name": "Falafel"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 40,
                "cuisine_name": "Fast Food"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 1006,
                "cuisine_name": "Fijian"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 112,
                "cuisine_name": "Filipino"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 271,
                "cuisine_name": "Finger Food"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 298,
                "cuisine_name": "Fish and Chips"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 45,
                "cuisine_name": "French"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 1025,
                "cuisine_name": "Fried Chicken"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 501,
                "cuisine_name": "Frozen Yogurt"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 274,
                "cuisine_name": "Fusion"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 134,
                "cuisine_name": "German"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 156,
                "cuisine_name": "Greek"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 181,
                "cuisine_name": "Grill"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 521,
                "cuisine_name": "Hawaiian"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 143,
                "cuisine_name": "Healthy Food"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 1022,
                "cuisine_name": "Hot Pot"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 228,
                "cuisine_name": "Hungarian"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 233,
                "cuisine_name": "Ice Cream"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 148,
                "cuisine_name": "Indian"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 114,
                "cuisine_name": "Indonesian"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 154,
                "cuisine_name": "International"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 140,
                "cuisine_name": "Iranian"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 135,
                "cuisine_name": "Irish"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 55,
                "cuisine_name": "Italian"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 60,
                "cuisine_name": "Japanese"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 265,
                "cuisine_name": "Jewish"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 1042,
                "cuisine_name": "Jiangnan"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 164,
                "cuisine_name": "Juices"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 178,
                "cuisine_name": "Kebab"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 167,
                "cuisine_name": "Kiwi"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 67,
                "cuisine_name": "Korean"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 1021,
                "cuisine_name": "Korean BBQ"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 136,
                "cuisine_name": "Latin American"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 66,
                "cuisine_name": "Lebanese"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 69,
                "cuisine_name": "Malaysian"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 977,
                "cuisine_name": "Meat Pie"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 70,
                "cuisine_name": "Mediterranean"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 73,
                "cuisine_name": "Mexican"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 137,
                "cuisine_name": "Middle Eastern"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 294,
                "cuisine_name": "Modern European"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 1055,
                "cuisine_name": "Modern New Zealand"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 74,
                "cuisine_name": "Mongolian"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 147,
                "cuisine_name": "Moroccan"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 117,
                "cuisine_name": "Nepalese"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 50,
                "cuisine_name": "North Indian"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 321,
                "cuisine_name": "Pacific"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 139,
                "cuisine_name": "Pakistani"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 209,
                "cuisine_name": "Pan Asian"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 162,
                "cuisine_name": "Peruvian"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 1020,
                "cuisine_name": "Pho"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 82,
                "cuisine_name": "Pizza"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 1019,
                "cuisine_name": "Poké"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 87,
                "cuisine_name": "Portuguese"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 983,
                "cuisine_name": "Pub Food"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 320,
                "cuisine_name": "Ramen"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 1033,
                "cuisine_name": "Roast"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 84,
                "cuisine_name": "Russian"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 998,
                "cuisine_name": "Salad"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 304,
                "cuisine_name": "Sandwich"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 83,
                "cuisine_name": "Seafood"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 831,
                "cuisine_name": "Shanghai"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 128,
                "cuisine_name": "Sichuan"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 119,
                "cuisine_name": "Singaporean"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 85,
                "cuisine_name": "South Indian"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 89,
                "cuisine_name": "Spanish"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 86,
                "cuisine_name": "Sri Lankan"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 141,
                "cuisine_name": "Steak"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 90,
                "cuisine_name": "Street Food"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 177,
                "cuisine_name": "Sushi"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 190,
                "cuisine_name": "Taiwanese"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 179,
                "cuisine_name": "Tapas"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 163,
                "cuisine_name": "Tea"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 981,
                "cuisine_name": "Teppanyaki"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 150,
                "cuisine_name": "Tex-Mex"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 95,
                "cuisine_name": "Thai"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 142,
                "cuisine_name": "Turkish"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 1038,
                "cuisine_name": "Uyghur"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 1034,
                "cuisine_name": "Vegan"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 308,
                "cuisine_name": "Vegetarian"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 641,
                "cuisine_name": "Venezuelan"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 99,
                "cuisine_name": "Vietnamese"
            }
        },
        {
            "cuisine": {
                "cuisine_id": 978,
                "cuisine_name": "Yum Cha"
            }
        }
    ]
    