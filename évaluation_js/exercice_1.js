var jeunes = 0;
var moyens = 0;
var vieux = 0;
while (true) {
    var input = window.prompt("Veuillez entrer un nombre");
    var number = parseInt(input);

    if (number < 20) {
        jeunes++;
    }

    if (number >= 20 && number < 40) {
        moyens++;
    }

    if (number >= 40 && number < 100) {
        jeunes++;
    }

    if (number >= 100) {
        vieux++;
        break;
    }
}

input = window.prompt("Nombre de jeune : " + jeunes + "\nNombre de moyens : " + moyens + "\nNombre de vieux : " + vieux);