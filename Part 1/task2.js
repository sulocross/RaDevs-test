function queueTime(customers, checkouts) {
    let checkout_time_array = []
    for (let i = 0; i < checkouts; i++) {
        checkout_time_array[i] = 0
    }
    customers.map((customer)=>{
        let free_checkout_index = checkout_time_array.indexOf(Math.min(...checkout_time_array))
        checkout_time_array[free_checkout_index] += customer
    })
    console.log(Math.max(...checkout_time_array))
}

queueTime([ 26, 42, 13, 18, 48, 38, 39, 25, 39, 6, 35, 11, 7, 38, 19, 14 ], 1) // 418

queueTime([ 34, 31, 40, 30, 48, 2, 19, 32, 37, 13, 30, 49, 3, 13, 12, 43, 39, 22, 47 ], 4) // 162

queueTime([ 19, 1, 27, 35, 16, 4, 45, 49, 41, 25 ], 5) // 65

queueTime([], 1)




