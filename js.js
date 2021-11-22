// function chekNumber(num) {
//     if (num === 0) {
//         return 0;
//     } else if (num < 0) {
//         return -1;
//     } else {
//         return 1;
//     }
// }
// document.write(chekNumber(500));

// function center(s, w) {
//     if (w <= s.length) {
//         return s;
//     }
//     let spaces = Math.floor((w - s.length) / 2);

//     return "-".repeat(spaces) + s + "-".repeat(spaces);
// }
// document.write("hello", 15);


let user = {
    name: "Vasya",
    age: 25,
    hasCar: true,
    skills: {
        html: "good",
        css: "excellent",
        js: "beginner",
    },
};

user.role = "admin";

// document.write("role" in user)

for (let key in user) {
    //     document.write(`${key}: ${user[key]} <br>`);
    if (typeof user[key] === "object") {
        for (let subkey in user[key]) {
            document.write(`${subkey}: ${user[key][subkey]}<br>`);
        }
    } else {
        document.write(`${key}: ${user[key]}<br>`);

    }
}