const possible_chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]

function hex_to_rgb() {
    let user_hex = String(prompt("Podaj liczbe w hex")).toLowerCase();

    // czy na poczatku jest #
    if (user_hex[0] != "#") {
        return;
    }

    // Czy dlugosc zgadza sie
    if (user_hex.length != 7) {
        return;
    }

    // Poprawnosc znakow
    for (var i = 1; i < user_hex.length; i++) {
        if (possible_chars.indexOf(user_hex[i]) == -1) {
            return;
        }
    }

    // Podzielenie hexa
    let hex = [];
    hex[0] = user_hex.slice(1, 3);
    hex[1] = user_hex.slice(3, 5);
    hex[2] = user_hex.slice(5, 7);

    // Konwersja
    let rgb = [];
    for(let i = 0; i < hex.length; i++) {
        rgb[i] = parseInt(hex[i], 16);
    }

    console.log(rgb)
    alert(`rgb (${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);

    console.log("ok")
}

function rgb_to_hex() {
    let user_hex = String(prompt("Podaj liczbe w formacie rgb(0, 0, 0)")).toLowerCase().trim();

    // Sprawdzenie poprawnosci zapisu
    let cutoff_rgb = user_hex.split("(")
    let values = cutoff_rgb[1].split(",") // podzielenie wszystkich wartosci
    values[2] = values[2].replace(")", "") // usunać ")" na koncu

    let hex = []
    for(let i = 0; i < values.length; i++) {
        hex[i] = parseInt(values[i]).toString(16);
        if (hex[i].length == 1) {
            hex[i] = "0" + hex[i]
        }
    }

    let result = `#${hex[0]}${hex[1]}${hex[2]}`;

    return result
}

function short_hex() {
    let user_hex = String(prompt("Podaj liczbe zapisana w systemie szesnastkowym")).toLowerCase().trim();
    let hex = user_hex.split("#")[1]

    for(let i = 0; i < hex.length; i += 2) {
        if(hex[i] != hex[i+1])
            return
    }

    console.log("tak")
}

function is_grey() {
    let user_hex = String(prompt("Podaj liczbe zapisana w systemie szesnastkowym")).toLowerCase().trim();
    let hex = user_hex.split("#")[1]

    for(let i = 0; i < hex.length / 3; i++) {
        if(hex[i] != hex[i+2] && hex[i+2] != hex[i+4]) 
            return
    }

    console.log("tak")
}

is_grey();