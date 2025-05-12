var liczby = [3, 6, 17, 7, 2, 9, 3, 4, 3, 4];

    // for (let i = 0; i < liczby.length; i++) {
    //     if (i % 2 != 0) {
    //         liczby[i] *= -1;
    //     }
    // }
    // console.log(liczby);
    
    // 4 zamienia na 0
    // for (let i = 0; i < liczby.length; i++) {
    //     if (liczby[i] == 4) {
    //         liczby[i] = 0;
    //     }
    // }
    // console.log(liczby);
    
    // var suma = 0;
    // for (let i = 0; i < liczby.length; i++) {
    //     suma += liczby[i];
    // }
    
    // // Srednia arytmetyczna
    // console.log(suma / liczby.length);
    
    // var najwieksza = 0;
    // for (let i = 0; i < liczby.length; i++) {
    //     najwieksza = Math.max(najwieksza, liczby[i]);
    // }
    // console.log(najwieksza);
    
    // Czy istnieje
    // let user = parseInt(prompt());
    // let czy_istnieje = liczby.includes(user) ? "tak" : "nie";
    // console.log(czy_istnieje);

const logi = "admin/40/10-12-2020#tomasz/16/11-12-2020#janusz99/5/11-12-2020#urszula/18/12-12-2020#admin/23/15-12-2020";

const logs_raw = logi.split("#");
const logs = [];

for (let i = 0; i < logs_raw.length; i++) {
    logs.push(logs_raw[i].split("/"));
}

// -------------------------
let suma_minut = 0;
let max_min = 0;
let max_min_index = 0;
for (let i = 0; i < logs.length; i++) {
    suma_minut += parseFloat(logs[i][1]);

    if (max_min < parseFloat(logs[i][1])) {
        max_min = parseFloat(logs[i][1]);
        max_min_index = i;
    }
}

console.log(`Najdluzej zalogowany byl: ${logs[max_min_index][0]} \nZalogowany byl przez: ${logs[max_min_index][1]} min`);
console.log(`Wszystkie godziny łacznie: ${(suma_minut/60).toFixed(1)}`)

let user = prompt("Kogo godziny chcesz sprawdzić?");

let user_time_sum = 0;
for (let i = 0; i < logs.length; i++) {
    if (logs[i][0] == user) {
        user_time_sum += parseFloat(logs[i][1]);
    }
}

console.log(`${user} był łącznie zalogwany pzez ${user_time_sum} min`);