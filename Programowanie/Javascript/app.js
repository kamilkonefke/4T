// let liczba = prompt("Podaj liczbe");
// if(liczba % 2 == 0 && liczba != 0 ) {
//     alert("Liczba jest parzysta");
// } else {
//     alert("Liczba jest nie parzysta");
// }

// let a = prompt("Podaj liczbe A");
// let b = prompt("Podaj liczbe B");

// if(a > b) {
//     alert(a);
// } else {
//     if(a == b) {
//         alert("Liczby są równe");
//     } else {
//         alert(b);
//     }
// }

// let a = prompt("Podaj liczbe a");
// let b = prompt("Podaj liczbe b");
// let c = prompt("Podaj liczbe c");

// if(a > b) {
//     if(a > c) {
//         alert(a);
//     } else {
//         alert(c);
//     }
// } else {
//     if(b > c) {
//         alert(b);
//     } else {
//         alert(c);
//     }
// }

let dlugosc_boku = Number(prompt("Podaj długość boku."));

if(dlugosc_boku > 0) {
    let pole_kwadratu = dlugosc_boku ** 2;
    alert("Pole kwadratu wynosi: " + pole_kwadratu);
} else {
    alert("Wprowadz liczbe wieksza niż 0");
}