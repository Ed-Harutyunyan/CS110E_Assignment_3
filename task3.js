function reverseNumbers(number) {
    let digit, reverse = 0;

    while (number > 0) {
        digit = number % 10 //to get the last digit of our input
        reverse = (reverse * 10) + digit //this will assign our first remainder to the first place, reverse srarted
        number = Math.floor(number / 10) //removes last digit
    }

    return reverse;
  }

  console.log(reverseNumbers(9989));