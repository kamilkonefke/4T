var STATE = 0;
var is_running = true;

let player_table = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

let computer_table = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

var char_atlas = ["_", "#", "x"]

function get_random_range(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generate_map(selector, table) {
    let map = document.querySelector(selector);
    map.innerHTML = "";
    for (let x = 0; x < 10; x++) {
        map.innerHTML += `<a>${x}</a>`
        for (let y = 0; y < 10; y++) {
            // if (y == 0 && x != 0) {
            //     map.innerHTML += `<a> ${x} </a>`
            // }
            map.innerHTML += `<a> ${char_atlas[table[x][y]]} </a>`
        }
        map.innerHTML += "<br>"
    }
    map.innerHTML += "$ 0 1 2 3 4 5 6 7 8 9"
}

function deal_damage(x, y, table) {
    table[x][y] = 1
}

function info(m) {
    document.querySelector("#info").innerHTML = m;
}

function pick() {
    console.log("ae");
}

function round() {
    generate_map("#player", player_table)
    generate_map("#computer", computer_table)

    // Gracz
    if (STATE == 0) {
        document.querySelector("#user-input").style.display = "inline"
        info("Podaj współrzędne")
        STATE = 1
        return;
    }

    // Komputer
    if (STATE == 1) {
        document.querySelector("#user-input").style.display = "none"
        info("Komputer wybiera pole...")
        STATE = 2
        return;
    }

    // Podsumowanie
    if (STATE == 2) {
        let player = document.querySelector("#user-input").value;

        deal_damage(player[0], player[2], computer_table)

        generate_map("#player", player_table)
        generate_map("#computer", computer_table)
        info("Wynik: ")
        STATE = 0;
        return;
    }
}