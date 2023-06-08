function askName () {
    let nom = prompt("Comment tu t'appelles?")
    let salut = "Bonjour " + nom;
    return salut;
}
    document.body.innerHTML += '<h2>' + askName() + '</h2>'
function askBirthYear () {
    let annee = prompt("Quel est ton annee de naissance ?")
    let age = 2023 - annee;
    let reponse = "J'ai " + age + " ans"
    return reponse;
    }
    document.body.innerHTML += '<h3>' + askBirthYear() + '</h3>' 

