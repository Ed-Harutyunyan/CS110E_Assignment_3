

    function inverseBinary (number) {

        let result = [];

     while (number > 0) {
        result.unshift(number % 2);
        number = Math.floor(number / 2);
     }
     
     let inverseBinary = []
     for (let i of result) {
        if (i == 0){

            inverseBinary.push(1)

        }else{

            inverseBinary.push(0)

        }
    }
    return inverseBinary.join("")
}
    

console.log(inverseBinary(123));
