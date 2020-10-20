// Your code below.
const makeDino = function(species, period, carnivore, extinct){
  const newDino = {
    species: species,
    period: period,
    carnivore: carnivore,
    extinct: extinct,
  }
  if(newDino.extinct == undefined){
    newDino.extinct = false;
  }
  return newDino;
}

const makeExtinct = function(makeDin){
  const newDino = makeDino(makeDin.species, makeDin.period, makeDin.carnivore);
  newDino.extinct = true;
  return newDino;
}

const truncateSpecies = function(dino){
  const newTrunc = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct)
  if(dino.extinct.length <= 10){
    dino.extinct;
  } 
  if(dino.extinct.length > 10) {
    dino.extinct.slice(0,7)
  }
  return newTrunc;
}

const makeSingular = function(dinosaur){
  const newTrunc = makeDino(dinosaur.species, dinosaur.period, dinosaur.carnivore, dinosaur.extinct)
  let dinoSpecie = dinosaur.species;
  if(dinoSpecie.endsWith('us') === true){
    newTrunc.species = dinoSpecie.slice(0, dinoSpecie.indexOf('us'));
  }
  
  return newTrunc
}


// const truncateSpecies = function(dino){
//   const newTrunc = {
//     species: dino.species,
//     period: dino.period,
//     carnivore: dino.carnivore,
//     extinct: dino.extinct,
//   }
//   if(dino.extinct <= 10){
//     return dino;
//   } else if(dino.extinct > 10) {
//     return dino.extinct.slice(0,7)
//   }
//   return newTrunc;
// }






// Our code below; DO NOT TOUCH!
if (typeof makeDino === 'undefined') {
  makeDino = undefined;
}

if (typeof makeExtinct === 'undefined') {
  makeExtinct = undefined;
}

if (typeof truncateSpecies === 'undefined') {
  truncateSpecies = undefined;
}

if (typeof makeSingular === 'undefined') {
  makeSingular = undefined;
}


module.exports = {
  makeDino,
  makeExtinct,
  truncateSpecies,
  makeSingular,
}
