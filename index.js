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
    return[...kittens, name]
}
function prependKitten(name){
   return [name, ...kittens]
}
function removeLastKitten(name){
  return
}
function removeFirstKitten(name){
  return
}
function destructivelyPrependKitten(name){
 kittens.pop();
 return kittens;
}
function destructivelyAppendKitten(name){
 kittens.unshift();
 return kittens;
}