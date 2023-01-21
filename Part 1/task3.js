function biggerNumber(number){
    let numbers_array = number.toString().split('')
    numbers_array.sort((a, b) => {
        return b - a
    })
    let new_number = parseInt(numbers_array.join(''))
    if (new_number == number) new_number = -1
    console.log(new_number)
}

biggerNumber(23) // 32;
biggerNumber(624) // 642;
biggerNumber(2018) // 8210;
biggerNumber(9) // -1;
biggerNumber(111) // -1;
biggerNumber(531) // -1;

biggerNumber(1146571)