var s = "";
var tinggi = 5;

for (var i = 1; i <= tinggi; i++) {
    for (var j = i; j < tinggi; j++) {
        s += " ";
    }
    for (var k = 1; k <= (2 * i - 1); k++) {
        s += "*";
    }
    s += "\n";
}

console.log(s);
