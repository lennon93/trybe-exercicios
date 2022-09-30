let player = {
    name : 'Marta',
lastName : 'Silva',
age : 34,
medals : { golden: 2, silver: 3 },
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(let key in car) {
    console.log(key, car[key]);
  }