var table = ["Audrey","Aurélien","Flavien","Jérémy","Laurent","Melik","Nouara","Salem","Samuel","Stéphane"];
var prénom = prompt("Trouvez les prénoms dans le tableau\nVeillez écrire un prénom");

if (table.includes(prénom)) {
    table.splice(table.indexOf(prénom), 1);
    table.push(" ");
}
else {
    alert("Ce prénom n'est pas dans le tableau")
}
alert(table);