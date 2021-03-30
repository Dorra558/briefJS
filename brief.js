//Excercice 1
function inverse(a,b){

  let temp
    temp=a
    a=b
    b=temp
    return "la nouvelle variable de a est: " + a + " et la nouvelle variable de b est: " +b
}
console.log('exercice1',inverse(2,3));

// Excercice 2
var Nom = 'toto'
var Age = 30
var Homme = true
console.log('Excercice 2 le Nom est: '+ Nom + ' ,son age est: ' + Age + ' et avec une valeur de Homme:' + Homme)

// Excercice 3
function puissance(p) {
  let y=Math.pow(p,2)
  return "la puissance de " + p +" est: " +y
}
console.log("Excercice 3", puissance(4))

//Excercice 4
function somme(a,b) {
  var a,b
  somme = a+b
  return "la somme de a et b est égal a: " + somme
}
console.log("Excercice 4", (somme(1,2)))

//Excercice 5
function ConvertSeconds (s){
  var s
  t = s*60
  return  "le nombre en seconde est: " +t+ " secondes"
}
console.log("Excercice 5", ConvertSeconds(1))

//Excercice 6
function incrémentation(i){
var i
i++
return "le nombre incrémenté égal à: " +  i;
}
console.log("Excercice 6", incrémentation(10))

//Excercice 7
function surface(b,h) {
  s = (b*h)/2
  return "le surface d'un triangle: " + s
}
console.log("Excercice", surface(4,3))

//Excercice 8
function inversee(ch) {
 chaine = ch.split('').reverse().join('');
return "l'inverse de la chaine est: " + chaine
}
console.log("Excercice 8", inversee('DORRA'))

//Excercice 9
function max(a,b,c) {
  let max = Math.max(a,b,c)
  return "la valeur maximale est: " + max
}
console.log("Excercice 9", max(5,16,3))

//Excercice 10
function maxTab(t) {
  let tab = [2, 6, 8, 71]
  return "Le premier élément du tableau est: " + tab[0]
}
console.log('Excercice 10',maxTab())

//Excercice 11

// Excercice 12

function restDiv(a,b) {
  let remainder = a % b;
  return "le reste de la division est: " + remainder
}
console.log("Excercice 12", restDiv(2,4))

//Excercice 13
function campare(a,b) {
  s = a + b
  let x 
  if (s < 100)
  x = true
  else
  x = false
  return "la somme de deux nombres:" + x
}
console.log("Excercice 13", campare(40,50))

//Excercice 14
function convertHour(t) {
  h = t * 60 * 60
  return "la valeur en seconde égal à:" + h
}
console.log("Excercice 14", convertHour(3))

//Excercice 15
function campareNull(nb) {
  let val
  if (nb <= 0) 
  val = true
  else
  val = false
  return "la valeur du nombre: " + val
}
console.log("Excercice 15",campareNull(15))

//Excercice 16
function egality(a,b) {
  let equal
  if (a==b)
  equal = true
  else
  equal = false
  return "les deux nombres " + a + " et " + b + " sont: " + equal
}
console.log("Excercice 16",egality(2,2))

//Excercice 17
function isDivisible(x) {
  let result
  if (x % 5 == 0)
  result = true
  else
  result = false
  return "le nombre " + x + " nous donne la divisiblité " + result
}
console.log("Excercice 17",isDivisible(20) )

//Excercice 18

function minHour(a,b) {
  let x = (a*60*60) + (b*60)
  return "l'heure " + a + " et la minute " + b + " sont convertit en " + x + " secondes"
}
console.log("Excercice 18",minHour(1,10))

//Excercice 19

function inversTab(t) {
  let tab = [1,8,3,12,8]
  for (var i = tab.length - 1; i >= 0; i--) {
    tab[i]
  }
  return "le tableau est inversé comme suit: " + tab[i]
}
console.log("Excercice 19",inversTab())

//Excercice 20
function minTab(t) {
  let tab = [2, 6, 8, 71]
  return "Le premier élément du tableau est: " + tab[tab.length-1]
  
}
console.log('Excercice 20',minTab())

//Excercice 21
