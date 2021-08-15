module.exports = function toReadable(number) {
    let result = "";
    const primeNumbers = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const decimalNumbers = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    number = ("000" + number).substr(-3).match(/^(\d{1})(\d{2})$/);
    result += number[0] == "000" ? "zero" : "";
    result += number[1] != 0 ? (primeNumbers[Number(number[1])] + ' ' || decimalNumbers[number[1][0]] + ' ' + primeNumbers[number[1][1]]) + 'hundred ' : '';
    result += number[2] != 0 ? primeNumbers[Number(number[2])] || decimalNumbers[number[2][0]] + ' ' + primeNumbers[number[2][1]] : '';

    return result.trim();
};
