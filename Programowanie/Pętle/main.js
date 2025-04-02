function oceny() {
    var suma = 0
    var ilosc_jedynek = 0;
    var ilosc_ocen = parseInt(prompt("Ile masz ocen?"));
    var suma_wag = 0;
    var max_ocena = 0;
    var min_ocena = 6; // 6 żeby nie wychodzilo, że najmniejsza liczba to 0

    for (let i = 0; i < ilosc_ocen; i++) {
        let input = String(prompt(`Podaj ocene i wagę \nwzór: ocena:waga \nnr: ${i + 1}: `)).split(":");
        let ocena = parseInt(input[0]);
        let waga = parseInt(input[1]);

        // Sprawdzenie poprawnosci
        if (ocena < 0 || ocena > 6) {
            console.log(`${ocena}: ocena nie poprawna`);
            i--;
            continue;
        }

        if (ocena == 1)
            ilosc_jedynek++;

        // Ustaw najwieksza i najniższa ocene
        max_ocena = Math.max(max_ocena, ocena);
        min_ocena = Math.min(min_ocena, ocena);

        suma += ocena * waga;
        suma_wag += waga;
    }

    srednia = (suma / suma_wag).toFixed(2);

    // Dodatkowo
    console.log(`Średnia: ${srednia}`);
    console.log(`Ilość jedynek: ${ilosc_jedynek}`);
    console.log(`Najwyższa ocena: ${max_ocena}`);
    console.log(`Najniższa ocena: ${min_ocena}`);

    alert(`
    Średnia: ${srednia}
    Ilość jedynek: ${ilosc_jedynek}
    Najwyższa ocena: ${max_ocena}
    Najniższa ocena: ${min_ocena}
    `)
}

oceny()