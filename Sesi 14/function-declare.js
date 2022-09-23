var test123 = getDigitNumber(123);
console.log("Test1 ,", test123);

function getDigitNumber (num) {
    var digits = [];
    num = Math.floor(Math.abs(num));
    if (!isNaN(num)) {
        while (num != 0) {
            digits.push(num % 10);
            num = Math.floor(num / 10);
        }
    }
    return digits;
}

var test465 = getDigitNumber(465); 
console.log("Test2, ", test465);
console.log("5; ", getDigitNumber(5));
console.log("-123.456", getDigitNumber(-123.456));
console.log("1000", getDigitNumber("1000"));