// adding list of data entries
let pokemonList = [];
pokemonList = [
  {name: "Bulbasaur",
  height: 0.7,
  type: "grass"
  },

  {name: "Eevee",
  height: 0.3,
  type: ["water", "speed"]
  },

  {name: "Wartortle",
  height: 1,
  type: ["water", "defense"]
  },

  {name: "Fearow",
  height: 1.2,
  type: ["flying", "speed"]
  },

  {name: "Arbok",
  height: 3.5,
  type: "poison"
  },

  {name: "Tentacruel",
  height: 1.6,
  type: ["water", "poison"]
  },

  {name: "Dratini",
  height: 1.8,
  type: ["dragon", "attack"]
  }
];

// create function to write above list in document & console
function printArrayDetails(list){
  for (let i=0; i < list.length; i++) {
    if (list[i].height > 2) {
      document.write(list[i].name + " (height: " + list[i].height + ") - Wow, that's big!" + '<br/>');
      console.log(list[i].name + " (height: " + list[i].height + ") - Wow, that's big!");
    } else {
      // or document.write("<p>" + list[i].name + " (height: " + list[i].height + ")" + "</p>")
      document.write(list[i].name + " (height: " + list[i].height + ")" + '<br/>');
      console.log(list[i].name + " (height: " + list[i].height + ")");
    }
  }
}

printArrayDetails(pokemonList);
