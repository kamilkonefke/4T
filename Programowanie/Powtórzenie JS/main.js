// let x = 5.0;
// operator trójargumentowy/ternarny
// let a;
// if(5 > 2 ) {
//     a = "tak";
// } else {
//     a = "nie";
// }
// odp = (4 % 2 == 0) ? "tak" : "nie";
// console.log(odp);

function oblicz_pole() {
    let wybor = prompt("1 - pole prostokąta\n 2 - pole trójkąta");

    if (wybor == 1) {
        let a = prompt("Wpisz wielkość jednego boku");
        let b = prompt("Wpisz wielkość drugiego boku");
        let wynik = a * b;
        alert("Pole: " + wynik);
    } else if (wybor == 2) {
        let a = prompt("Wpisz podstwę trójkąta");
        let h = prompt("Wpisz wysokość");
        let wynik = a * h / 2;
        alert("Pole: " + wynik);
    }
    else {
        // Nic nie wybrano
        alert("Nic nie wybrano");
    }
}

function czy_trojkat_mozna_zbudowac() {
    let a = parseInt(prompt("Podaj a"));
    let b = parseInt(prompt("Podaj b"));
    let c = parseInt(prompt("Podaj c"));

    if (a + b > c && a + c > b && b + c > a) {
        alert("Tak");
        let p = a**2 + b**2;
        if (p == c ** 2) {
            alert("Prostokątny");
        } else {
            alert("Nie prostokątny");
        }
    }
    else {
        alert("Nie");
    }
}

function przedzial() {
    let p1 = parseInt(prompt("Podaj początek przedzialu"));
    let p2 = parseInt(prompt("Podaj koniec przedziału"));
    let x = parseInt(prompt("Podaj wartość na przedziale"));

    if(x > p1 && x < p2) {
        alert("Jest w przedziale");
    } else {
        alert("Nie jest w przedziale");
    }
}

function wieksza_mniejsza() {
    let a = parseInt(prompt("Podaj pierwszą liczbe"));
    let b = parseInt(prompt("Podaj drugą liczbę"));

    if(a > b) {
        alert(a + ">" + b);
    }
    else if(a < b) {
        alert(a + "<" + b);
    }
    else if(a == b) {
        alert(a + "=" + b);
    }
}

function ocena() {
    let ocena = parseInt(prompt("Podaj ocene"));
    switch(ocena) {
        case 6:
            alert("Celujący");
            break;
        case 5:
            alert("Bardzo dobry");
            break;
        case 4:
            alert("Dobry");
            break;
        case 3:
            alert("Dostateczny");
            break;
        case 2:
            alert("Dopuszczajacy");
            break;
        case 1:
            alert("Niedostateczny");
            break;
        default:
            break;
    }
}

function cwiartki() {
    let x = parseInt(prompt("Podaj x"));
    let y = parseInt(prompt("Podaj y"));

    if(x == 0.0 || y == 0.0) {
        alert("Punkt jest na osi");
    }

    if(x > 0.0) {
        if(y > 0.0) {
            alert("1");
        } else {
            alert("4");
        }
    }
    if(x < 0.0) {
        if(y > 0.0) {
            alert("2");
        } else {
            alert("3");
        }
    }
}

function czy_jest_palindromem() {
    let a = prompt("Podaj trzycyfrową liczbę");

    if(a.length == 3 && a == parseInt(a)) {
        a = parseInt(a);
        let pierwsza = parseInt(a / 100.0)
        let ostatnia = a % 10;

        if (pierwsza == ostatnia) {
            alert("Jest");
        } else {
            alert("Nie jest");
        }
    } else {
        alert("To nie jest liczba trzycyfrowa");
    }
}

function zgadywanka() {
    let min = parseInt(prompt("Podaj minimalna liczbe"));
    let max = parseInt(prompt("Podaj maksymalna liczbe"));

    if (min != parseInt(min) || max != parseInt(max)) {
        alert("Ktoraś z podanych wartości nie jest liczbą")
    } else {
        // Po poprawnej konwersji liczb
        let wylosowana_liczba = Math.floor(Math.random() * (max - min) + min);

        for (var ilosc_prob = 3; ilosc_prob > 0; ilosc_prob--) {
            let podana_liczba = parseInt(prompt("Odgadnij liczbę"))

            if (podana_liczba == wylosowana_liczba) {
                alert("Brawo!");
                break;
            }

            if (podana_liczba > wylosowana_liczba) {
                alert("Wylosowana liczba jest mniejsza");
            } else {
                alert("Wylosowana liczba jest większa");
            }

            alert("Zostaly ci " + (ilosc_prob - 1) + " proby");
        }
        if (ilosc_prob == 0) {
            alert("Nie udało się :(. Wylosowana liczba to " + wylosowana_liczba);
        }
    }
}