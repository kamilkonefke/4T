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
    let user_hex = String(prompt("Podaj liczbe w formacie rgb(0, 0, 0)")).toLowerCase();

    // czy na poczatku jest rgb( i na koncu )
    if (!user_hex.includes("rgb(")) {
        return;
    }

    if (user_hex[user_hex.length] != ")") {
        return;
    }

    console.log("ae")
}

rgb_to_hex();