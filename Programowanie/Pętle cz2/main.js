function szachownica(max_x, max_y, pion_x, pion_y) {
    let result = "";
    for(let y = 0; y < max_y; y++) {
        for(let x = 0; x < max_x; x++) {
            if(y == 0 || x == 0 || x == max_x-1 || y == max_y-1) {
                result += " #"
            }
            // ustaw pionka
            else if(x == pion_x && y == pion_y) {
                result += " $"
            }
            else if(y % 2 != 0) {
                if(x % 2 == 0) {
                    result += " x"
                } 
                else {
                    result += " o"
                }
            }
            else {
                if(x % 2 != 0) {
                    result += " x"
                }
                else {
                    result += " o"
                }
            }
        }
        result += "\n"
    }
    return result
}

function tabliczka_mnozenia() {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            result += `${i*j}\t`;
        }
        result += "\n"
    }
    return result
}

console.log(szachownica(10, 10, 5, 5));
console.log(tabliczka_mnozenia());