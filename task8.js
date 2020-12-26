//*С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

function recPow(val, pow) {
    if (pow === 0) {
        return val = 1
    } else {
        return pow === 1 ? val : val * recPow(val, --pow)
    }
}

//Намучился я кончено с этой рекурсией)