// Over summer I started a course called 'The Odin Project' which taught me a lot of HTML/CSS and JS. Wish that I continued studying cause vanilla HTML/CSS/JS feels complicated.
// Get the select, button, and tbody tag.
const input = document.getElementById("arc-list");
const btn = document.getElementById("btn");
const tbody = document.getElementById('arc-info');

// Event listener for the button. Displays the appropriate row based on selection.
btn.addEventListener("click", () => {
  document.querySelectorAll(".curr").forEach((element) => {
    element.remove();
  });
  let tableContent = input.options[input.selectedIndex].value;
  if (tableContent == "preskip") {
    arr = [
      "east-blue",
      "alabasta",
      "skypiea",
      "water-7",
      "thriller-bark",
      "summit-war",
    ];
    for (let arc of arr) {
      newRow(arc);
    }
  } else if (tableContent == "postskip") {
    arr = ["fishman-island", "dressrosa", "four-emperors"];
    for (let arc of arr) {
      newRow(arc);
    }
  } else {
    newRow(tableContent);
  }
});

// Function for creating a single new row.
function newRow(arc) {
  arr = createRowElements();
  switch (arc) {
    case "east-blue":
      eastblue(arr);
      break;
    case "alabasta":
      alabasta(arr);
      break;
    case "skypiea":
      skypiea(arr);
      break;
    case "water-7":
      water7(arr);
      break;
    case "thriller-bark":
      thrillerbark(arr);
      break;
    case "summit-war":
      summitwar(arr);
      break;
    case "fishman-island":
      fishmanisland(arr);
      break;
    case "dressrosa":
      dressrosa(arr);
      break;
    case "four-emperors":
      fouremperors(arr);
      break;
  }
  appendRowElements(arr);
}

// Function for creating the row elements.
function createRowElements() {
  const row = document.createElement("tr");
  const name = document.createElement("td");
  const summary = document.createElement("td");
  const episodes = document.createElement("td");
  const villains = document.createElement("td");
  const villains_list = document.createElement("ul");
  const v1 = document.createElement("li");
  const v2 = document.createElement("li");
  const v3 = document.createElement("li");
  row.className = "curr";
  return [
    input,
    row,
    name,
    summary,
    episodes,
    villains,
    villains_list,
    v1,
    v2,
    v3,
  ];
}

// Function for appending the row elements after textContent has been added.
function appendRowElements(elementArr) {
  elementArr[6].appendChild(elementArr[7]);
  elementArr[6].appendChild(elementArr[8]);
  elementArr[6].appendChild(elementArr[9]);
  elementArr[5].appendChild(elementArr[6]);
  elementArr[1].appendChild(elementArr[2]);
  elementArr[1].appendChild(elementArr[3]);
  elementArr[1].appendChild(elementArr[4]);
  elementArr[1].appendChild(elementArr[5]);
  tbody.appendChild(elementArr[1]);
}

// Functions adding textContent based on arc.
function eastblue(elementArr) {
  elementArr[2].textContent = "East Blue";
  elementArr[3].textContent =
    "Luffy sets out for the Grand Line, but first he needs a crew... Cue the introduction of Zoro, Nami, Usopp, and Sanji!";
  elementArr[4].textContent = "Episodes 1 to 61";
  elementArr[7].textContent = "Buggy the Clown";
  elementArr[8].textContent = "Arlong";
  elementArr[9].textContent = "Marine Captain Smoker";
}

function alabasta(elementArr) {
  elementArr[2].textContent = "Alabasta";
  elementArr[3].textContent =
    "The Strawhats finally reach the Grand Line! Meet the newest Strawhats Chopper and Robin and watch their battles against Warlord of the Sea Crocodile to end his reign over the kingdom of Alabasta.";
  elementArr[4].textContent = "Episodes 62 to 135";
  elementArr[7].textContent = "Warlord of the Sea, Crocodile";
  elementArr[8].textContent = "Baroque Works Agents";
  elementArr[9].textContent = "Wapol";
}

function skypiea(elementArr) {
  elementArr[2].textContent = "Skypiea";
  elementArr[3].textContent =
    "An island in the sky!?!?!? The Stawhats go to Skypiea in search of gold, but find the island in a state of disrepair. Why is this such a common theme?";
  elementArr[4].textContent = "Episodes 136 to 206";
  elementArr[7].textContent = "Bellamy";
  elementArr[8].textContent = "Enel";
  elementArr[9].textContent = "NPC Marines";
}

function water7(elementArr) {
  elementArr[2].textContent = "Water 7";
  elementArr[3].textContent =
    "With there ship, the Going Merry, heavily damaged after falling from Skypiea the Strawhats set for Water 7. An island of shipwrights and home to the newest Strawhat, Cyborg Franky. The Strawhats declare war on the World Government to save the world!";
  elementArr[4].textContent = "Episodes 207 to 325";
  elementArr[7].textContent = "Admiral Aokiji (Kuzan)";
  elementArr[8].textContent = "Cipher Pol 9";
  elementArr[9].textContent = "The World Government";
}

function thrillerbark(elementArr) {
  elementArr[2].textContent = "Thriller Bark";
  elementArr[3].textContent =
    "Join the Strawhats at Thriller Bark, base of Warlord of the Sea Gecko Moria and welcome the newest Strawhat Humming Swordsman Brooke!";
  elementArr[4].textContent = "Episodes 326 to 384";
  elementArr[7].textContent = "Ryuma";
  elementArr[8].textContent = "Warlord of the Sea, Gecko Moria";
  elementArr[9].textContent = "Warlord of the Sea, Kuma";
}

function summitwar(elementArr) {
  elementArr[2].textContent = "Summit War";
  elementArr[3].textContent =
    "The Strawhats convene with the rest of the Worst Generation on Sabaody Island where they learn how truly weak they are. After an intense battle on Marineford, the Strawhats go their separate ways to prepare for their adventures in the New World.";
  elementArr[4].textContent = "Episodes 385 to 516";
  elementArr[7].textContent = "Blackbeard";
  elementArr[8].textContent = "Navy Admirals";
  elementArr[9].textContent = "The Seven Warlords of the Sea";
}

function fishmanisland(elementArr) {
  elementArr[2].textContent = "Fish-man Island";
  elementArr[3].textContent =
    "Two years have passed and the Strawhats are ready to set out for the New World. ";
  elementArr[4].textContent = "Episode 517 to 574";
  elementArr[7].textContent = "Sentomaru";
  elementArr[8].textContent = "Vander Decken";
  elementArr[9].textContent = "Hordy Jones";
}

function dressrosa(elementArr) {
  elementArr[2].textContent = "Dressrosa";
  elementArr[3].textContent =
    "Luffy teams up with Trafalgar D. Law of the Heart Pirates to take down Donquixote Doflamingo! What new powers does Luffy have?";
  elementArr[4].textContent = "Episodes 575 to 746";
  elementArr[7].textContent = "Caesar Clown";
  elementArr[8].textContent = "Sugar";
  elementArr[9].textContent = "Warlord of the Sea Doflamingo";
}

function fouremperors(elementArr) {
  elementArr[2].textContent = "Four Emperors";
  elementArr[3].textContent =
    "The most recent arc of the series! Watch Luffy and the Stawhats ascend to new heights in their battle against the four emperors and the World Government.";
  elementArr[4].textContent = "Episodes 747 to Present";
  elementArr[7].textContent = "Blackbeard";
  elementArr[8].textContent = "Kaido";
  elementArr[9].textContent = "Big Mom";
}
