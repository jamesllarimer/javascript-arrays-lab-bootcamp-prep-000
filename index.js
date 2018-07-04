// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyPrependKitten(name){
 return  kittens.unshift(name);
}
function destructivelyAppendKitten(name){
return kittens.push(name);
}
function appendKitten(name){
    return [...kittens, name]
}
function prependKitten(name){
   return [name, ...kittens]
}
function removeLastKitten(name){
var length =  kittens.length;
  return kittens.splice(length);
}
function removeFirstKitten(name){
  return kittens.splice(1)
}
function destructivelyRemoveFirstKitten(name){
 kittens.shift();
 return kittens;
}
function destructivelyRemoveLastKitten(name){
 kittens.pop();
 return kittens;
}