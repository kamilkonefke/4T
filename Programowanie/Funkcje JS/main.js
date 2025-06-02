function kwadratn(n) {
    return n ** 2;
}

function dodaj(a, b) {
    return a + b;
}

function oblicz_pole_prostokata(a, b) {
    return a * b;
}

function celc_na_fahr(celc) {
    return celc * (9.0/5.0) + 32;
}

function czy_parzysta(n) {
    if (n % 2 == 0) {
        return true
    } else {
        return false
    }
}

function okresl_tekst(tekst) {
    if (tekst.length <= 10) {
        return "krotki"
    } else if (tekst.length >= 11 && tekst.length <= 30) {
        return "sredni"
    } else if (tekst.length > 30) {
        return "dlogi"
    }
}

function czy_zero(n) {
    if (n == false) {
        return true
    } else {
        return false
    }

}

function iloraz(dzielna, dzielnik) {
    if (czy_zero(dzielnik)) {
        console.log("Nie dziel przez 0");
        return;
    }

    return dzielna / dzielnik;
}

// Inne cwiczenia
function tell_fortune(nums_children, partners_name, location, job_title) {
    console.log(`You will be a ${job_title} in ${location}, and married to ${partners_name} with ${nums_children} kids.`);
}

function calculate_dog_age(human_age) {
    let dog_years = human_age * 7;
    console.log(`Your doggie is ${dog_years} years old in dog years!`);
}

function calculate_supply(age, per_day) {
    var max_age = 100;
    var supply_needed = (per_day * 365) * (max_age - age);
    console.log(`You will need ${supply_needed} to last you until the ripe old age of ${max_age}`);
}

function calc_cirum_frence(radius) {
    var out = 2 * Math.PI * radius;
    console.log(`The circumference is ${out}`);
}

function calc_area(radius) {
    var out = Math.PI * (radius ** 2);
    console.log(`The area is ${out}`);
}

function celc_to_fahr(celc) {
    var fahr =  celc * (9.0/5.0) + 32;
    console.log(`${celc}°C is ${fahr}°F`);
}

function fahr_to_celc(fahr) {
    var celc = 5/9*(fahr-32);
    console.log(`${fahr}°F is ${celc}°C.`);
}