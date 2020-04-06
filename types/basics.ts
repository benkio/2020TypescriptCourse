function add(n1: number, n2: number, printResult: boolean, message: string) {
    const result = n1 + n2;
    if (printResult) {
        console.log(message + result);
    } else{
        return result;
    }
}

const number1: number = 4;
const number2: number = 3;
const printResult = true;
const message = "Result is: ";
const result = add( number1, number2, printResult, message);
