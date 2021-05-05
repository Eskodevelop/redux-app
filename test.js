function sayHello(subject) {
    return `Heloo ${subject}`
}



function greeting() {
    return sayHello;
}

var f = greeting()('Mickey');
console.log(f);