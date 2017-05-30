var a = prompt("Enter a");
var b = prompt("Enter b");
var value = (a * a) + (2 * a * b) - (b * b);
if (value > 0) {
    console.log('Wynik dodatni');
} else if (value < 0) {
    console.log('Wynik ujemny');
} else if (value == 0) {
    console.log('Wynik = 0');
} else {
	console.log('Zmienna nie jest liczbą');
}
