
let nom = prompt("Comment tu t'appelles?")

let salut = "Bonjour " + nom

document.body.innerHTML += '<h2>' + salut + '</h2>'

let annee = prompt("Quel est ton annee de naissance ?")

let age = 2023 - annee

let reponse = "J'ai " + age + " ans"

document.body.innerHTML += '<h3>' + reponse + '</h3>'

