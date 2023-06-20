
// Exercice 1 and 2
// let message = 'Nom : Doe \nPrenom : John \nVille : New-York'

// alert(message);


// Exercice 3
// let getName = prompt("What is your name? ");
// alert('Bonjour,' + getName);


// Exercice 4
// let name = prompt("What is your name, surname and city?");
// let surname = prompt("What is your surname?");
// let city = prompt("What is your city?");

// let message = 'Nom :' + surname + \n + 'Prenom :' + name + \n + 'Ville :' + city;


// Exercice 5
// let firstNumber = prompt('write a first number')
// let secondNumber = prompt('write a second number')
// firstNumber = Math.floor(firstNumber)
// firstNumber = parseInt(firstNumber, 10);
// let result = firstNumber * secondNumber
// alert(result)


// Exercice 6
// function showRemainder(divident, divisor) {
//     let remainder = divident%divisor;
//     alert('divident:divisor=' + remainder);
// }


// Exercice 7

// let pointure = prompt('Veulilez taper votre pointure :')
// let anneeNaissance = prompt('Veulilez taper votre annee de naissance :')

// function calculBizarre(pointure, anneeNaissance){
//     return(((((pointure*2)+5)*50)-anneeNaissance)+1766)
// }
// let result = calculBizarre(pointure, anneeNaissance);
// alert(result)


// Exercice 8
// let age = prompt("Votre age?");
// let message = (age < 18) ? 'Vous êtes mineur' : 'Vous êtes major';
// alert(message);


// Exercice 9

// let num = parseInt(prompt("Write a number:"));

// document.write(num);
// document.write("<ul>");

// for (let i = 1; i <= 10; i++) {
//   document.write("<li>" + i + " x " + num + " = " + (i * num) + "</li>");
// }

// document.write("</ul>");


// Exercice 10

// let phrase = prompt('Write a phrase')
// const tabPhrase = phrase.split('');
// let result = '';
// tabPhrase.forEach(character => {
// result += character+'\n';
// })
// alert(result);


// EXERCICE N°11
let nombre = 15;

while(nombre < 1 || nombre > 10){
    nombre = prompt('Veuillez saisir un nombre compris entre 1 et 10');
}

nombre = parseInt(nombre); // !!!!!!!

if(nombre < 5){
    alert('le nombre saisit ('+nombre+') est inférieur à 5');
} else {
    if(nombre === 5){
        alert('le nombre saisit ('+nombre+') est égal à 5'); 
    } else{
        alert('le nombre saisit ('+nombre+') est supérieur à 5');
    }
}

// EXERCICE N°12
// function auCarre(nombre){
//     return nombre**2;
// }

// let nombre = prompt('Saisissez le nombre dont vous voulez calculer son carré :');
// let result = auCarre(nombre);
// alert(result);cd