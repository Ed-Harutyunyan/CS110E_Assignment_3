function arrayPrimeNums (max) {

let primes = [];

function getPrimenumbers (i) {
            if (i === 2 || i === 3) {

                return true;

            }else if (i % 2===0 || i % 3===0) {

                return false;

            } else {
                return true;
            }
            
    }

    for (let i = 2; i <= max; i += 1) {
        if (getPrimenumbers(i) === true) {
        primes.push(i)
        }
    } 

    return primes; 

}

console.log(arrayPrimeNums(56));
