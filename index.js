// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyPrependKitten(name){
 kittens.unshift(name);
 return kittens;
}
function destructivelyAppendKitten(name){
 kittens.push(name);
 return kittens;
}
function appendKitten(name){
  return [name, ...kittens]
}
function prependKitten(name){
  return[...kittens, name]
}
function removeLastKitten(name){
  return
}
function removeFirstKitten(name){
  return
}