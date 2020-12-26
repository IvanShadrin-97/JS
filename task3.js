var a = 13;
var b = -15;


if (a && b >= 0) {
    return a - b;
} else if (a && b < 0) {
    return a + b;
} else if (a < 0 && b > 0 || b < 0 && a > 0) {
    return a + b;
};
