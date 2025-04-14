let rocks = [
    [0],
    [0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
];

function draw_rocks() {
    let result = "";
    for(let i = 0; i < rocks.length; i++) {
        result += `${rocks[i].length} `
        for(let j = 0; j < rocks[i].length; j++) {
            result += " o" 
        }
        result += "\n"
    }
    return result
}

function take_rock(row, take) {
    rocks[row].splice(rocks[row].length-take, take)

    // czy przegrał
    if(rocks[row].length == 0) {
        return true
    }
    return false;
}

function game() {
    // main game loop
    while(true) {
        console.log(draw_rocks());

        // user
        let user_row = parseInt(prompt("Wpisz z jakiego rzędu chcesz zabrać"));
        let user_amount = parseInt(prompt("Wpisz ile chcesz zabrać"));

        if(take_rock(user_row-1, user_amount)) {
            console.log("Przegraleś")
            break;
        }

        // pc
        // do not -1
        let pc_row = Math.floor(Math.random() * 3);
        let pc_amount = 1

        if(take_rock(Math.abs(pc_row-1), pc_amount)) {
            console.log("Wygrałeś")
            break;
        }
    }
}

game()