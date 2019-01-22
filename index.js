var app = {};

app.add = function (first, second) {
    return first + second;
};

app.increment = function (number) {
    return number++;
};

console.log(app.add(5, 11));