function palindromOrNot (number) { 
      
    function reverseNumbers(number) {
        let digit, reverse = 0;
    
        while (number > 0) {
            digit = number % 10 //to get the last digit of out input
            reverse = (reverse * 10) + digit //this will assign our first remainder to the first place, reverse srarted
            number = number / 10 | 0 //removes last digit
        }
    
        return reverse;
      }

        if (reverseNumbers(number) === number) {
        console.log(`The integer ${number} is a palindrom`);
      } else {
        console.log(` The integer ${number} is not a palindrom try another number`);
      }

}

console.log(palindromOrNot(189));