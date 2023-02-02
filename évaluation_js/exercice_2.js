var x = 0;
var n = parseInt(prompt("Veuillez entrer un nombre entier"));
while (n!=0) {
    x++;
    result = n * x;
    console.log(n + " x " + x + " = " + result);
if (x==10) {
    break;
}
}
