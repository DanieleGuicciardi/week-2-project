/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

console.log("ESERCIZIO #1");

const pets = ['dog', 'cat', 'hamster', 'redfish'];
for(let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log("ESERCIZIO #");

console.log(pets.sort());

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log("ESERCIZIO #3");

console.log(pets.reverse());


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log("ESERCIZIO #4");

const firstPet = pets.splice(0,1) [0];
pets.push(firstPet);

console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

console.log("ESERCIZIO #5");

const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]


function plates(cars){
  cars.forEach(car => {
    car.licensePlate = "DT" + Math.floor(Math.random() * 1000 ) + "HF"
  });
}

console.log(cars);



/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

console.log("ESERCIZIO #6");

cars.push({
  brand: "Alfa Romeo",
  model: "Mito",
  color: "etna black",
  trims: ["fast", "quadrifoglio", "hatchback"],
})

plates(cars);

cars.forEach(car => {
  car.trims.pop();
});
  
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

console.log("ESERCIZIO #7");

const justTrims = []

for(let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log("ESERCIZIO #8");

for(let i = 0; i < cars.length; i++){
  if(cars[i].color[0] === "b"){
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array nmeruico fino al raggiungimento del numero 32.
*/

console.log("ESERCIZIO #9");

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0;

while(i < numericArray.length) {
  console.log(numericArray[i]);
  i += 1;
  if(numericArray[i - 1] === 32) {
    break;
  }
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

console.log("ESERCIZIO #10");

const charactersArray = ['g', 'n', 'u', 'z', 'd'];


function posizione(characters) {
  let corrispondente;
  switch(characters) {
    case "a": 
      corrispondente = 1; 
      break;
    case "b": 
      corrispondente = 2; 
      break;
    case "c": 
      corrispondente = 3; 
      break;
    case "d": 
      corrispondente = 4; 
      break;
    case "e": 
      corrispondente = 5; 
      break;
    case "f": 
      corrispondente = 6; 
      break;
    case "g": 
      corrispondente = 7; 
      break;
    case "h": 
      corrispondente = 8; 
      break;
    case "i": 
      corrispondente = 9; 
      break;
    case "j": 
      corrispondente = 10; 
      break;
    case "k": 
      corrispondente = 11; 
      break;
    case "l": 
      corrispondente = 12; 
      break;
    case "m": 
      corrispondente = 13; 
      break;
    case "n": 
      corrispondente = 14; 
      break;
    case "o": 
      corrispondente = 15; 
      break;
    case "p": 
      corrispondente = 16; 
      break;
    case "q": 
      corrispondente = 17; 
      break;
    case "r": 
      corrispondente = 18; 
      break;
    case "s": 
      corrispondente = 19; 
      break;
    case "t": 
      corrispondente = 20; 
      break;
    case "u": 
      corrispondente = 21; 
      break;
    case "v": 
      corrispondente = 22; 
      break;
    case "w": 
      corrispondente = 23; 
      break;
    case "x": 
      corrispondente = 24; 
      break;
    case "y": 
      corrispondente = 25; 
      break;
    case "z": 
      corrispondente = 26; 
      break;

  }
  return corrispondente;
}

const numero = charactersArray.map(characters => posizione(characters));

console.log(numero);



