
class Model {
    calculate(first, second, op) {
        var result = NaN;
        if (op === "+") {
            result = first + second;
        }
        else if (op === "-") {
            result = first - second;
        }
        else if (op === "/") {
            if (second !== 0) {
                result = first / second;
            }
        }
        else if (op === "*") {
            result = first * second;
        }
        else if (op === "^") {
            result = Math.pow(first, second);
        }
        return result;
    }

    convertation(convop, convstate) {
        if (convstate === "Digit - binary") {
            return parseInt(convop).toString(2);
        }
        else {
            return parseInt(convop, 2).toString(10);
        }
    }
}
export default Model;