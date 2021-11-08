function getPrimeNumbers (number) {
    if (number === 2 || number === 3) {

        return true;

    }else if (number % 2===0 || number % 3===0) {

        return false;

    } else {
        return true;
    }
}

console.log(getPrimeNumbers(16));