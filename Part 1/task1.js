/*sortString(‘g5et ski3lls on6 use1 your2 to4 7top’)
Output: ‘use1 your2 ski3lls to4 g5et on6 7top’
sortString(‘practic3 h4rder yo1u 2hould’)
Output: ‘yo1u 2hould practic3 h4rder’
*/

function sortString(str) {
    try{
        if (str.length < 1) return
        let words_array = str.split(" ")
        let new_words_array = []
        words_array.map(word => {
            let counter = words_array.length
            while (counter != 0) {
                if (word.includes(counter)) {
                    new_words_array[counter - 1] = word
                    break
                }
                counter --
            }
            if (counter == 0) {
                throw new Error('Word must have a number!')
            }}) 
            console.log(new_words_array.join(' '))}
    catch(e){
        console.log(e)
    }
    
}

sortString('g5et ski3lls on6 use1 your2 to4 7top')
sortString('practic3 h4rder you 2hould')


