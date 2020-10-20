// Your code below.

// *******this also works********************
// const makeDino = function(species, period, carnivore, extinct){
//   const newDino = {
//     species: species,
//     period: period,
//     carnivore: carnivore,
//     extinct: extinct,
//   }
//   if(newDino.extinct == undefined){
//     newDino.extinct = false;
//   }
//   return newDino;
// }
// ******************************************

const makeDino = function(species, period, carnivore, extinct = false){
  const newDino = {
    species: species,
    period: period,
    carnivore: carnivore,
    extinct: extinct,
  }
  // if(newDino.extinct == undefined){
  //   newDino.extinct = false;
  // }
  return newDino;
}

const makeExtinct = function(makeDin){
  const newDino = makeDino(makeDin.species, makeDin.period, makeDin.carnivore, true);
  // newDino.extinct = true;
  return newDino;
}

const truncateSpecies = function(dino){
  const newTrunc = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct)
  
  // ******this version don't work******
  // if(dino.species.length <= 10){
  //   dino.species;
  // } else if(dino.species.length > 10) {
  //   dino.species = dino.species.slice(0,7) + '...'
  // }
  // **********************************

  if(newTrunc.species.length >= 10){
    newTrunc.species = newTrunc.species.slice(0, 7) + '...'
  }
  return newTrunc;
}

// ********this is wrong***********************
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
// *********************************************
const makeSingular = function(dinosaur){
  const newTrunc = makeDino(dinosaur.species, dinosaur.period, dinosaur.carnivore, dinosaur.extinct)
  let dinoSpecie = dinosaur.species;
  if(dinoSpecie.endsWith('us') === true){
    newTrunc.species = dinoSpecie.slice(0,-2);
  }

  // ******this version also works***********
  // if(dinoSpecie.endsWith('us') === true){
  //   newTrunc.species = dinoSpecie.slice(0, dinoSpecie.indexOf('us'));
  // }
  // ****************************************
  
  return newTrunc
}








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
